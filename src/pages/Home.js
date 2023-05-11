import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'
import {motion } from "framer-motion"

function Home() {
  return (
    <motion.div className='home' 
      style={{ backgroundImage:`url(${BannerImage})` }}
      initial={{width:0}}
      animate={{width:"100%"}}
      // exit={{x:"100%"}}
      exit={{x: window.innerWidth, transition:{duration:0.4}}}
       >
        <div className='headerContainer'>
          <h1> Sawinu's Pizzeria</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
    </motion.div>
  )
}

export default Home