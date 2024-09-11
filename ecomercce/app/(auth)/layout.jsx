import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
        <nav className='flex flex-col gap-y-3 bg-red-500'> 
            This is a navbar
        </nav>
        {children}
    </div>
  )
}

export default Layout