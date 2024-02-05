import { Button, IconButton } from '@mui/material'
import React from 'react'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

export const ButtonDemo1 = () => {
  return (
    <div>
        {/* <div style={{backgroundColor:"state.background"}}> */}
        <Button variant='contained' color='primary' sx={{color:"pink",backgroundColor:"black"}}>Primary</Button>
        <Button variant='outlined' startIcon={<AccessibilityIcon/>}>Outlined</Button>
        <IconButton aria-label="delete">
            <FingerprintIcon />
        </IconButton>
        {/* </div> */}
    </div>
  )
}

