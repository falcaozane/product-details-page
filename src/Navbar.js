import React from 'react'
import classes from './App.module.css';
const Navbar = () => {
  return (
    <header>
        <nav className={classes.Topbar}>
          {/*<img src="./amazonvector.png" alt="Amazon logo" />*/}
          <h3 style={{'color': 'white'}}>My Shop</h3>
    </nav>
    </header>
  )
}

export default Navbar