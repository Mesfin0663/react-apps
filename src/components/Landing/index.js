import React from 'react';
import Button from '@mui/material/Button';
import CustNavbar from '../../widgets/Navbar/CustNavbar';

const Landing = () => (
  <div>
    <CustNavbar/>
  
    <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
  </div>
);

export default Landing;
