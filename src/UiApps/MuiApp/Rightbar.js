import React from 'react'
import {Box} from '@mui/material'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2}
     sx={{  
          display: {xs:"none", sm:"block"},
          backgroundColor: {sm: 'red', lg:'black', xl: 'green'}
    }}
    >Rightbar</Box>
  )
}

export default Rightbar