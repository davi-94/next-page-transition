import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

import data from "../data";
const { products } = data();

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing
    }
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <motion.div intial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="container center">
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="title">
          <h1>Select Figure</h1>
        </motion.div>

        <motion.div variants={stagger} className="product-row">
          {products.map(product => (
            <Link key={product.id} href="/products/[id]" as={`/products/${product.id}`}>
              <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="card">
                <span className="category">Figure</span>
                <motion.img
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key={product.image}
                  src={product.image}
                  width={250}
                />
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
