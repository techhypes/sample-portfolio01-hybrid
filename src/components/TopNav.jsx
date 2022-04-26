import React, { useState } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

const TopNav = () => {
  const [dark, setDark] = useState(true);

  const switchDark = (dark) => {
    if (dark) {
      setDark(true);
      document.querySelector('body').classList.remove('light-theme');
    } else {
      setDark(false);
      document.querySelector('body').classList.add('light-theme');
    } 
  };

  return (
      <div className="topnav__container fixed-top shadow">
        <div className="container py-4">
          <header className='d-flex justify-content-between'>
              <a href="#">Name</a>
              {dark && (<HiOutlineSun className='topnav__icon' onClick={() => switchDark(false)} />)}
              {!dark && (<HiOutlineMoon className='topnav__icon' onClick={() => switchDark(true)} />)}            
          </header>
        </div>
      </div>
  )
}

export default TopNav