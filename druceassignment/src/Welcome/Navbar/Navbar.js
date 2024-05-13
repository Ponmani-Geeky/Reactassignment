import React from 'react';
import "./Navbar.css"
import group from '../../assests/logo.jpg'
import icons from '../../assests/Icons.jpg'
import Notification from '../../assests/Notification.jpg'
import Grid from '@mui/material/Grid';
const Navbar=()=>{


  return(
    <>
    <div className='navbar'>
    <Grid container spacing={3}>
  <Grid item xs={4}>
  <img src={group}/>
  </Grid>
  <Grid item xs={4} className='menus'>
     <p>Home</p>
     <p>Lettings</p>
     <p>Rent</p>
  </Grid>
  <Grid item xs={4}>
  <img src={Notification}/>
  <img src={icons}/>
  <p>My Druce</p>
  </Grid>
</Grid>
    </div>
    </>
  )
}

export default Navbar