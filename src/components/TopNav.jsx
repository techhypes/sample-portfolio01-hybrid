import React, { useState } from 'react'
import { HiOutlineSun, HiSun } from 'react-icons/hi'

const TopNav = () => {
  const [dark, setDark] = useState(true);

  const switchDark = (dark) => {
    if (dark) {
      setDark(true);
    } else {
      setDark(false);
    } 
  };

  return (
      <div className="topnav__container fixed-top shadow">
        <div className="container py-4">
          <header className='d-flex justify-content-between'>
              <a href="#">Name</a>
              {dark && (<HiOutlineSun className='topnav__icon' onClick={() => switchDark(false)} />)}
              {!dark && (<HiSun className='topnav__icon' onClick={() => switchDark(true)} />)}            
          </header>
        </div>
      </div>
  )
}

export default TopNav