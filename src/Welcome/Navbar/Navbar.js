import React from 'react';
import "./Navbar.css"
import logo from '../../assests/logo.svg'
import icons from '../../assests/Icons.svg'
import Notification from '../../assests/Notification.svg'
import Grid from '@mui/material/Grid';
const Navbar=()=>{


  return(
    <>
    <div className='navbar'>
    <Grid container spacing={3} className={'navlayout'}>
  <Grid item xs={3} className='logo'>
  <img src={logo} width='150px'/>
  </Grid>
  <Grid item xs={4} className='menus'>
     <p>Home</p>
     <p>Lettings</p>
     <p>Rent</p>
  </Grid>
  <Grid item xs={3} className='account'>
  <img src={Notification} width='30px' height='35px'/>
  <img src={icons} width='30px' height='35px'/>
  <p className='currentuser'>My Druce</p>
  </Grid>
</Grid>
    </div>
    </>
  )
}

export default Navbar