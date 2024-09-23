import React from "react";
import { motion } from "framer-motion";

function Card({ title, imageurl,github,live }) {
  return (
    <motion.div
      className="card"
      style={{ width: "18rem" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y:10}}
      whileInView={{ opacity: 1, y:0}}
      transition={{delay:0.2}}
      viewport={{ once: false, amount: 0.2 }}
    >
      <img className="card-img-top" src={imageurl} alt="Card image cap" />

      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          {title}
        </h5>
        {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p> */}
        <div className="card-btns">
          <a href={github}>
          <button>Code</button>
          </a>
          <a href={live}>
          <button>Live</button>
          </a>
        </div>
      </div>
      
    </motion.div>
  );
}

export default Card;
