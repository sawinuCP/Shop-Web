import React from 'react'
import { MenuList } from "../helpers/MenuList";
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
import {motion } from "framer-motion"

function Menu() {
  return (
    <motion.div className='menu' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key)=>{
                return <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.Price}
                />
            })}
        </div>
    </motion.div>
  )
}

export default Menu;