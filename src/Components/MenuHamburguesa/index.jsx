//componente menú hamburguesa
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function MenuHamburguesa() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='cont-menuHamburguesa'>
            <div className={`cont-menuHamburguesa__btn ${menu ? 'open' : ''}`} onClick={toggleMenu}>
                <div className='linea-menuHamburguesa'></div>
                <div className='linea-menuHamburguesa'></div>
                <div className='linea-menuHamburguesa'></div>
            </div>
            <div className={`cont-menuHamburguesa__menu ${menu ? 'open' : 'ocultar'}`}>
                <ul className='ul-menuHamburguesa'>
                    <li onClick={toggleMenu}><Link to='/'>Inicio</Link></li>
                    <li onClick={toggleMenu}><Link to='/ventas'>Ventas</Link></li>
                    <li onClick={toggleMenu}><Link to='/alquileres'>Alquileres</Link></li>
                    <li onClick={toggleMenu}><Link to='/emprendimientos'>Emprendimientos</Link></li>
                    <li onClick={toggleMenu}><Link to='/internacional'>Internacional</Link></li>
                    <li onClick={toggleMenu}><Link to='/quienes-somos'>Quienes Somos</Link></li>
                    <li onClick={toggleMenu}><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuHamburguesa