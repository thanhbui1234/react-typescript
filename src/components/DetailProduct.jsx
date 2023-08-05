import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);

  const { idProd } = useParams();
  console.log(idProd);
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${idProd}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);
  return (
    <div>
      <h2>Detail Product</h2>
      <h3>{product.product}</h3>
      <h3>{product.price}</h3>
    </div>
  );
};

export default DetailProduct;
