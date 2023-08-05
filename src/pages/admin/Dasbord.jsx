import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Dasbord = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products`)
      .then(({ data }) => setProducts(data));
  }, []);

  const onHandleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Yeu cam ly nhat the gioio",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then(() => {
        const dataDelete = products.filter((product) => product.id !== id);
        setProducts(dataDelete);
      });
  };
  return (
    <div>
      <Link to="/admin/add">Add</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="colSpan">ID</th>
            <th scope="colSpan">Name</th>
            <th scope="colSpan">Price</th>
            <th scope="colSpan">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.product}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => onHandleDelete(product.id)}>
                    Xoa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dasbord;
