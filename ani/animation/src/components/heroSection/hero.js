import React from "react";
import { motion } from "framer-motion";
import "../heroSection/hero.css";
import BatMan from "../../images/batman.svg";
function hero() {
  return (
    <>
      <div className='container'>
        <div className='section'>
          <div className='leftSide'>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='title'>
              Hello, this is Batman.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className='normalText'
            >
              Welcome to my space
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9, backgroundColor: "#fff", border: "none", color: "#000" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 3 } }}
            >
              More
            </motion.button>
          </div>
          <div className='rightSide'>
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              whileHover={{ scale: 1.2 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              src={BatMan}
              className='images'
              alt='BatMan'
            />
            <motion.img
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              whileHover={{ scale: 1.2 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              src={BatMan}
              className='images'
              alt='BatMan'
            />
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              whileHover={{ scale: 1.2 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              src={BatMan}
              className='images'
              alt='BatMan'
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              whileHover={{ scale: 1.2 }}
              drag={true}
              dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
              src={BatMan}
              className='images'
              alt='BatMan'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
