import React from "react";
import { motion } from "framer-motion";

const Model = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) return setSelectedImg(null);
  };
  return (
    <motion.div
      className="backdrop"
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <motion.img
        src={selectedImg}
        initial={{ top: "-100%" }}
        animate={{ top: "50%" }}
        alt="big image"
      />
    </motion.div>
  );
};

export default Model;
