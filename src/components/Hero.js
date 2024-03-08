import React from 'react'
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} >
      <div className="hero">
      <div className="hero-img">
        <img src="https://i.postimg.cc/kMNz5grj/flower.png" alt="Pixel Skincare" />
      </div>
      <div className="hero-text">
        <h1>Your Skin<br /> Would Loved It!</h1>
        <a href='' className="btn">Explore</a>
      </div>
    </div>
    </motion.div>
  )
}

export default Hero
