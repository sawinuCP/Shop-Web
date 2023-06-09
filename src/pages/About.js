import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import "../styles/About.css"
import { motion } from "framer-motion"

function About() {
  return (
    <motion.div className='about' initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <div className='aboutTop' style={{ backgroundImage:`url(${MultiplePizza})` }} 
        ></div>
        <div className='aboutBottom' >
            <h1> ABOUT US</h1>
            <p>explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
              quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
              eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
              voluptas nulla pariatur?</p>
        </div>
    </motion.div>
  )
}

export default About