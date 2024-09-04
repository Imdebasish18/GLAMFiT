import Addproduct from "../components/Addproduct";
import Listproduct from "../components/LIstproduct";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col">
          <Sidebar />
          <Routes>
            <Route path="/addProduct" element={<Addproduct />} />
            <Route path="/itemList" element={<Listproduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
