import React from "react";
import { motion } from "framer-motion";

const Model = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) return setSelectedImg(null);
  };
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClick}
    >
      <motion.img
        src={selectedImg}
        initial={{ top: "-100%" }}
        animate={{ top: "50%" }}
        alt="big image"
      />
      <motion.div
        className="img-des-wrapper"
        initial={{ top: "100%" }}
        animate={{ top: "30%" }}
        transition={{ delay: 1.2 }}
      >
        <motion.img
          className="descriptive-img"
          src={selectedImg}
          alt="descriptive info about image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <motion.p
          className="img-desc"
          initial={{ height: "-150%", transform: "translate(-50%, -150%)" }}
          animate={{ height: "95%", transform: "translate(-50%, -50%)" }}
          transition={{ delay: 1.5 }}
        >
          I don't know what to tell you the words are hard to find, but you are
          the only one that is ever on my mind. If I could pick to stop a moment
          in our time, it would be when I'm holding you for the first time. All
          I have to look at is your pictures that I see, but I hope to change
          that very soon indeed. I want to hug and kiss you and get to know you
          too, I want to see you everyday and hold you close too. Hopefully this
          puts a smile on that beautiful face, because a day that you don't
          smile would truly be a waste. I think about what I would do when I get
          the chance, but looking upon beauty like yours will put me in a
          trance. Maybe I should tell you now what will be hard to say, for when
          you stand next to me my breath you take away. The day I got to see you
          my breath I couldn't catch, my heart was beating faster and fluttering
          to match. Now all I wonder is what this year will bring, and if it is
          you and I a happy song I'll sing.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Model;
