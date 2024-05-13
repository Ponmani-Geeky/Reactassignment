import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './Header.css'
const Header=()=>{
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Overview
        </Link>
      ];

    return(
        <div className='HeaderLayout'>
        <div className='Header'>
        <div>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p>Welcome to Druce</p>
        </div>
        <div>
        <button>Overview</button>
        <button>Contacts</button>
        </div>
        </div>
        </div>
    )
}

export default Header