import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ShopContex } from "../contex/ShopContex";

export default function LoginSignup() {
  const [state, setState] = useState("Sign up");
  const { serverLink } = useContext(ShopContex);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("Login function executed..", formData);
    let responseData;
    await fetch(`${serverLink}/Login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    await fetch(`${serverLink}/Signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="w-full bg-[#fce3fe] flex place-content-center">
      <div className="w-[500px] bg-white mx-2 my-10 md:mx-auto  px-4 md:px-6 py-3 md:py-5 ">
        <h1 className="m-4 text-lg md:text-2xl font-semibold">{state}</h1>
        <div className="flex flex-col gap-3 md:gap-5 mt-3 md:mt-5">
          {state === "Sign up" && (
            <input
              className="w-full  h-5 md:h-11  p-4 border border-solid border-[#c9c9c9] text-[#5c5c5c] text-xs md:text-sm"
              type="text"
              placeholder="Your Name"
              onChange={changeHandler}
              value={formData.username}
              name="username"
            />
          )}
          <input
            className="w-full h-5 md:h-11 p-4 border border-solid border-[#c9c9c9] text-[#5c5c5c] text-xs md:text-sm"
            type="email"
            placeholder="Your Email Address"
            onChange={changeHandler}
            value={formData.email}
            name="email"
          />
          <input
            className="w-full h-5 md:h-11 p-4 border border-solid border-[#c9c9c9] text-[#5c5c5c] text-xs md:text-sm"
            type="password"
            placeholder="Your Password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
          />
        </div>
        <button
          className="w-full h-7 md:h-11 text-white bg-[#ff4141] mt-5 md:mt-8 font-medium text-sm md:text-lg"
          onClick={state === "Sign up" ? () => signup() : () => login()}
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <p className="mt-5 text-xs md:text-sm text-[#5c5c5c] font-medium">
            Already have an account?
            <span
              className="text-[#ff4141] font-semibold "
              onClick={() => setState("Login")}
            >
              &nbsp; Login here
            </span>
          </p>
        ) : (
          <p className="mt-5 text-xs md:text-sm text-[#5c5c5c] font-medium">
            Do not have an account?
            <span
              className="text-[#ff4141] font-semibold "
              onClick={() => setState("Sign up")}
            >
              &nbsp; create an account
            </span>
          </p>
        )}

        <div className="flex items-center my-5 md:mt-5 gap-3 md:gap-4 text-[#5c5c5c] text-xs md:text-sm font-medium ">
          <input type="checkbox" />
          <p>By Continuing i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}
