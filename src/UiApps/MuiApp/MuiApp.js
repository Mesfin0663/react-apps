import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Navbar from './Navbar'

import {Box, Container,Stack} from '@mui/material'
function MuiApp() {
  return (
    <Box sx={{backgroundColor: ''}}>
        {/* stack justify content 'center 'aligns all of them together at the center 
          but space-between shares the space evenly between the elements
        */}
        <Stack direction="row" spacing={2} justifyContent='space-between' >
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>

     
    </Box>
  )
}

export default MuiApp
