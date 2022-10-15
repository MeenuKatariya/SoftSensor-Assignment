import { Button } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom"
export const Cart = ()=> {
  return (
    <div>
      <Link  style={{textDecoration:"none"}} to={"/" }>
      <Button  variant="contained">Go to back
      
      </Button>
      </Link>
    </div>
  )
}
