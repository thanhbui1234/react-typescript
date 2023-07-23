import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
const Home = () => {
  const [products, setProduct] = useState([]);
  const addProduct = (product) => {
    setProduct([...products, product]);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then(({ data }) => setProduct(data));
  }, []);

  const deleteProduct = (id) => {
    const dataDelete = products.filter((product) => {
      return product.id != id;
    });
    setProduct(dataDelete);
  };
  const updateProduct = (id) => {
    const dataUpadate = products.map((product) => {
      return product.id == id
        ? { id: 1, name: "thanh", price: 12321321 }
        : product;
    });
    setProduct(dataUpadate);
  };

  return (
    <div>
      <button onClick={() => addProduct({ id: 4, name: "hai", price: 100 })}>
        add
      </button>

      <div>
        {products.map((product, index) => {
          return (
            <div key={index + 1}>
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
              <button onClick={() => deleteProduct(product.id)}>
                Xoa san pham{" "}
              </button>
              <button onClick={() => updateProduct(product.id)}>
                Cap nhat san pham
              </button>
              <button>
                <Link to={`detail/${product.id}`}>Detail</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>

    /// route
  );
};

export default Home;
