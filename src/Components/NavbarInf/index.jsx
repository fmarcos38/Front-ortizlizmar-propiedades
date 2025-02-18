import React from 'react';
import Logo from '../../Images/logo-blanco.webp';
import LanguageSelector from '../CambiaIdioma';
import MenuHamburguesa from '../MenuHamburguesa';
import './styles.css';
import { NavLink } from 'react-router-dom';

function NavbarInf() {
    return (
        <div className='cont-navbarInf'>
            <div className='sub-cont-navbarInf'>
                <div className='col-1-navbarInf'>
                    <div className='cont-menuHamburguesa-navbarInf'>
                        <MenuHamburguesa />
                    </div>
                    <div className='cont-logo-navbarInf'>
                        <NavLink to='/' className='navlink-navbarInf'>
                            <img src={Logo} alt='Logo' className='logo-navbarInf' />
                        </NavLink>
                    </div>
                </div>
                <div className='col-2-navbarInf'>
                    <ul className='ul-navbarInf'>
                        <li>Ventas</li>
                        <li>Alquileres</li>
                        <li>Emprendimientos</li>
                        <li>Internacional</li>
                        <li>Quienes Somos</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className='col-3-navbarInf'>
                    <LanguageSelector />
                </div>
            </div>
        </div>
    )
}

export default NavbarInf