import React from 'react'
    
const MyHeader = ({myStyle, children}) => {

  return (
    <div>
        
        <h3 style={{ color: myStyle }}> {children}</h3>
      
    </div>
  )
}

export default MyHeader
