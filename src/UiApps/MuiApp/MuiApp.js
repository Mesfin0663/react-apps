import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Navbar from './Navbar'

import {Box, Container,Stack} from '@mui/material'
function MuiApp() {
  return (
    <Box sx={{backgroundColor: 'red'}}>
        <Stack direction="row" spacing={2} justifyContent='center' >
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>

     
    </Box>
  )
}

export default MuiApp
