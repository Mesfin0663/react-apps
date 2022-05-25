import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Navbar from './Navbar'

import {Box, Container,Stack} from '@mui/material'
function MuiApp() {
  return (
    <Box >

        {/* stack justify content 'center 'aligns all of them together at the center 
          but space-between shares the space evenly between the elements
          MUI Break POints
          xs, extra -small: 0p
          sm, small: 500px
          md, medium:900px
          lg, large: 1200px
          xl, extra-larg: 1536px
        */}
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent='space-between' >
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>

     
    </Box>
  )
}

export default MuiApp
