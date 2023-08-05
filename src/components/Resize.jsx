import React, { useState } from "react";

const Resize = () => {
  const [witdh, setWitdh] = useState(window.innerWidth);
  const handleResize = () => {
    setWitdh(window.innerWidth);
  };
  useState(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <h1>{witdh}</h1>;
};

export default Resize;
