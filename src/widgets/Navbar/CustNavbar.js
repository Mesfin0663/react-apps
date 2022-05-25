import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Add from '@mui/icons-material'
import {Button, styled} from '@mui/material'
function CustNavbar() {
  const BlueButton = styled(Button)(({theme})=> ({
    backgroundColor: theme.palette.navColor.main,
    color: "red",
    margin:5,
    "&:hover":{
      backgroundColor:"lightblue"
    }
  }))
  return (
    <div>
      <h1>Navbar from widgets</h1>
      <Button
      startIcon={<SettingsIcon/>}
      variant ="contained"
      color="navColor"
      size= "small"
      > Hello Button</Button>
      <Button 
      
      variant="contained"
      color="navColor" 

      >My unique button</Button>
      <BlueButton>red</BlueButton>
    </div>
  )
}

export default CustNavbar
