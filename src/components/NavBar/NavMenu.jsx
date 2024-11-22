import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import Css from './NavMenu.module.css';

function NavMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const isHomePage = location.pathname === '/';
  const isContactPage = location.pathname === '/contact';
const isFoodDrinksPage = location.pathname === '/food&drinks';
const isPrivateEventPage = location.pathname === '/privateevents';

  const homeNev = () => {
    navigate('/');
  };

  const contactNev = () => {
    navigate('/contact');
  };

  const foodDrinksNev = () => {
    navigate('/food&drinks');
  };

  const privateEventNev = () => {
    navigate('/privateevents');
  };


  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button className={Css.SideBarMenu} variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        <CiMenuBurger className={Css.Icon} style={{ color: location.pathname === '/contact' ? '#E2DAC6' : '#A94931' }} />
      </Button>
      <Drawer
        color="#A94931"
        invertedColors={false}
        variant="solid"
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <div className={Css.CloseIconBox}>
          <button className={Css.CloseIcon} onClick={toggleDrawer(false)}>
            <IoMdClose />
          </button>
        </div>
        <div className={Css.SideBarNav}>
          {!isHomePage && <h4 onClick={homeNev}>HOME</h4>}
          {!isFoodDrinksPage && <h4 onClick={foodDrinksNev}>FOOD & DRINK MENUS</h4>}
          {!isPrivateEventPage && <h4 onClick={privateEventNev}>PRIVATE DINING & EVENTS</h4>}
          {!isContactPage && <h4 onClick={contactNev}>CONTACT US</h4>}
          <h4>RESERVATIONS</h4>
          <h2>LYRA</h2>
        </div>
      </Drawer>
    </Box>
  );
}

export default NavMenu;




