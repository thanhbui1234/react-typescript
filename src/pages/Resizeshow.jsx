import React, { useState } from "react";
import Resize from "../components/Resize";

const Resizeshow = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ margin: 150 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Resize />}
    </div>
  );
};

export default Resizeshow;
