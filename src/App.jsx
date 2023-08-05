import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gift from "./components/gift";
import { Route, Routes, Link, useParams } from "react-router-dom";
import Todo from "./components/Todo";
import axios from "axios";
import Dasbord from "./pages/admin/dasbord";
import DetailProduct from "./components/DetailProduct";
import UseEfectf8 from "./pages/UseEfectf8";
import Resizeshow from "./pages/Resizeshow";
import AddProd from "./pages/admin/AddProd";

function App() {
  // const [products, setProduct] = useState([]);
  const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/products").then(({ data }) => {
  //     setProduct(data);
  //   });
  // }, []);

  const addProduct = (data) => {
    axios.post(`http://localhost:3000/products`, data).then((response) => {
      console.log("ok ");
    });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/menus").then(({ data }) => setMenu(data));
  }, []);

  return (
    <div className="app">
      <nav>
        <Link style={{ padding: 10 }} to="/">
          Home
        </Link>
        <Link style={{ padding: 10 }} to="/header">
          HeLinkder
        </Link>
        <Link style={{ padding: 10 }} to="/gift">
          gift
        </Link>
        <Link style={{ padding: 10 }} to="/todo">
          Todo
        </Link>
        <Link style={{ padding: 10 }} to="/admin">
          Admin
        </Link>
        <Link style={{ padding: 10 }} to="/UseEfect">
          UseEffect
        </Link>{" "}
        <Link style={{ padding: 10 }} to="/resize">
          Resize
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header data={menu} />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/admin" element={<Dasbord />} />
        <Route path="/detail/:idProd" element={<DetailProduct />} />
        <Route path="/UseEfect" element={<UseEfectf8 />} />
        <Route path="/resize" element={<Resizeshow />} />
        <Route
          path="/admin/add"
          element={<AddProd addProduct={addProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;
