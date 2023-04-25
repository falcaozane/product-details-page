import React from 'react'
import image from './amazonvector.png'
import classes from './App.module.css';
const Navbar = () => {
  return (
    <header>
        <nav className={classes.Topbar}>
          <img src={image} alt="Amazon logo" />
          {/*<h3 style={{'color': 'white'}}>My Shop</h3>*/}
    </nav>
    </header>
  )
}

export default Navbar