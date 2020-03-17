import React from 'react'
import Logo from '../Logo/Logo';

export const Navbar = ({onRouteChange, isSignedIn}) => {
  return (
    <nav style={{textAlign: 'right', display: 'flex', justifyContent: 'space-between'}}>
      <Logo style={{display: 'inline'}}/>
      {
      isSignedIn 
      ? <p className="f3 link dim black underline pa3 pointer" onClick={()=>onRouteChange("signin")}>Sign Out</p>
      : (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>)
      }
      
    </nav>
  )
}
