import React from 'react'
import {AppBar, Toolbar} from "@mui/material"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position='static' sx={{
        backgroundColor: 'black'
    }}>
         <Toolbar>
        
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
                   <Button color="inherit">Login</Button>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2,
          display: {sm: 'none', xs:"block"}
        }}> 
        <MenuIcon />
      </IconButton>
         </Toolbar>
        
   </AppBar>
  )
}

export default Navbar