import React, { useState } from "react";

const gifts = ["camly", "docamly", "sieucamly"];

const Gift = () => {
  const [gift, setGift] = useState();

  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    console.log(index);
    setGift(gifts[index]);
  };
  return (
    <div>
      <h1>{gift || " Không có phần thưởng nào"}</h1>
      <button onClick={handleGift}>Lay thuong</button>
    </div>
  );
};

export default Gift;
