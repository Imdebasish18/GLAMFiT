import { useState } from "react";
import { Link } from "react-router-dom";
export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("shops");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="md:hidden mr-1 text-lg" onClick={toggleSidebar}>
        ☰
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Catagories</h2>
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <Link
            to="/"
            onClick={() => {
              setOption("shops");
              console.log("Setting option to shops");
            }}
          >
            <li
              className={`p-2 rounded-md ${option == "shops" && "bg-gray-700"}`}
            >
              Shop
            </li>
          </Link>
          <Link to="/mens" onClick={() => setOption("mens")}>
            <li
              className={`p-2 rounded-md ${option == "mens" && "bg-gray-700"}`}
            >
              Men
            </li>
          </Link>

          <Link
            to="/womens"
            onClick={() => {
              setOption("womens");
            }}
          >
            <li
              className={`p-2 rounded-md ${
                option == "womens" && "bg-gray-700"
              }`}
            >
              Women
            </li>
          </Link>

          <Link to="/kids" onClick={() => setOption("kids")}>
            <li
              className={` p-2 rounded-md ${option == "kids" && "bg-gray-700"}`}
            >
              Kids
            </li>
          </Link>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
