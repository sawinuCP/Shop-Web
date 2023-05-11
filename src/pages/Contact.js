import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'
import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.div className='contact' initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <div className='leftSide' style={{ backgroundImage:`url(${pizzaLeft})` }}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' mothod="POST">
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter the full name' type='text' />
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter the email' type='email' />
                <label htmlFor='message'>Message</label> 
                <textarea rows="6" placeholder='enter the message' name='message' required/>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact