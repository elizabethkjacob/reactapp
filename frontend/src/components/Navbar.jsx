import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Button, Toolbar} from '@mui/material';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const tokenrelease=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'purple'}} position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}} to={'/loginadmin'}>Admin Login</Link></Button>
          <Button color="inherit"><Link style={{color:'white', textDecoration:'none'}} to={'/employees'}> Home</Link></Button>
          <Button color="inherit" onClick={tokenrelease}><Link style={{color:'white', textDecoration:'none'}}to={'/'}>Logout</Link></Button>
          </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar