import React from 'react'
import { Outlet } from 'react-router-dom'
const Mainheader = () => {
    return (
        <div>
          <Outlet/>
          {/* this is used to render other pages which are inside home route */}
    
    
        </div>
      )
}
export default Mainheader
