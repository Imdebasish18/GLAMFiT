const port = process.env.PORT || 8001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database Connection with Mongodb:
mongoose.connect("mongodb+srv://GLAMFiT:Imdeba18@cluster0.2vtqb.mongodb.net/");
//API Creation
const server = app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(`Error: ${err}`);
  }
});
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed");
    mongoose.connection.close(() => {
      console.log("Database connection closed");
      process.exit(0);
    });
  });
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
    mongoose.connection.close(() => {
      console.log("Database connection closed");
      process.exit(0);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Everything working fine");
});

//Image upload engine:
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating end point for image:
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.use("/images", express.static("upload/images"));

//Product schema for MongoDB:
const productSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: String, required: true },
  old_price: { type: String, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

const Product = mongoose.model("Product", productSchema);

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  cart: { type: Object, required: true },
});
const User = mongoose.model("User", userSchema);

//Add product:

app.post("/addProduct", async (req, res) => {
  let products = await Product.find({});
  let id = 0;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  res.json({
    success: 1,
    name: req.body.name,
  });
});

//Delete Product:

app.post("/removeProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    success: 1,
    name: req.body.name,
  });
});

//Creating middleware to fetch user:
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      return res
        .status(401)
        .send({ errors: "please authenticate with valid token" });
    }
  }
};

//Creating endpoint for adding products in cartdata:
// app.post("/addToCart", fetchUser, async (req, res) => {
//   console.log(req.body);
//   let userData = await User.findOne({ _id: req.user.id });
//   userData.cart[req.body.item_id] += 1;
//   await User.findOneAndUpdate({ _id: req.user.id }, { cart: userData.cart });
//   res.send("added");
// });
app.post("/addToCart", fetchUser, async (req, res) => {
  console.log("added!", req.body.itemId);
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }

    const itemId = req.body.item_id;

    // Ensure the item exists in the cart, or initialize it
    if (!userData.cart[itemId]) {
      userData.cart[itemId] = 0;
    }

    userData.cart[itemId] += 1;

    await User.findOneAndUpdate({ _id: req.user.id }, { cart: userData.cart });

    res.send("Item added to cart");
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send({ errors: "Server error" });
  }
});

//Creating endpoint to remove product from cart:
app.post("/removeFromCart", fetchUser, async (req, res) => {
  console.log("removed!", req.body.itemId);
  try {
    let userData = await User.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }

    const itemId = req.body.item_id;

    // Ensure the item exists in the cart, or initialize it
    if (!userData.cart[itemId]) {
      userData.cart[itemId] = 0;
    }
    if (userData.cart[itemId] > 0) {
      userData.cart[itemId] -= 1;
    }

    await User.findOneAndUpdate({ _id: req.user.id }, { cart: userData.cart });

    res.send("Item remove from cart");
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send({ errors: "Server error" });
  }
});

//Creating endpoint to get cartdata:
app.post("/getCart", fetchUser, async (req, res) => {
  console.log("GetCart");
  let userData = await User.findOne({ _id: req.user.id });
  res.json(userData.cart);
});

//Showing all products:

app.get("/allProducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All product fetched!");
  res.send(products);
});

//Sign Up method:

app.post("/Signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(email);
  // console.log(password);
  console.log(username);
  const check = await User.findOne({ email: email });
  // console.log(check);
  if (check) {
    return res.status(200).json({
      success: false,
      message: "This email is already in use!",
      check,
    });
  } else {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    const user = new User({
      username: username,
      password: password,
      email: email,
      cart: cart,
    });
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
  }
});

app.post("/Login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

app.get("/newCollection", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  console.log("new collection fetched!");
  res.send(newCollection);
});
//---------------------------------------
app.post("/relatedProduct", async (req, res) => {
  let index = req.body.id;
  let category = req.body.category;
  let products = await Product.find({ category: category });
  let length = products.length;
  let start = (length + index) % (length - 5);
  let newCollection = products.slice(start, start + 4);
  console.log("new collection fetched!");
  res.send(newCollection);
});
//-------------------------------------------
app.get("/popularInWomen", async (req, res) => {
  let womenProducts = await Product.find({ category: "women" });
  let popularInWomen = womenProducts.slice(0, 4);
  console.log("popular in women collection fetched");
  res.send(popularInWomen);
});
