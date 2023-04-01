import logo from './images/logo.svg';
import menu from './images/icon-menu.svg';
import close from './images/icon-close-menu.svg';
import { useState } from 'react';
import Aside from './Aside';
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function menuHnadler() {
            setIsMenuOpen(!isMenuOpen);
     
        
    }
    return ( 
        <header>
            <img className='snap' src={logo} alt="page logo"/>
            <img onClick={menuHnadler} className='menu' src={isMenuOpen?close:menu} alt="hamburger-menu"/>
           <Aside opened={isMenuOpen}/>
        </header>
     );
}

export default Header;