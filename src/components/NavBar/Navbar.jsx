import React from 'react'
import { useLocation } from 'react-router-dom';
import Navmanu from './NavMenu'

import Css from './Navbar.module.css'


function Navbar() {
  const location = useLocation();

  const isContactPage = location.pathname === '/contact';

  return (
    <div className={Css.container}>
      <h3 style={{ color: isContactPage ? '#E2DAC6' : '#A94931' }}>Reservations</h3>
      <div className={Css.Navmanu}>
      <Navmanu />
      </div>
    </div>
  )
}

export default Navbar