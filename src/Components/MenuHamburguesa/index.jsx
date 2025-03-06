//componente menú hamburguesa
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function MenuHamburguesa({userLog}) {
    
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null); // Referencia para el menú hamburguesa
    const menuItemsRef = useRef([]); // Referencia para los elementos del menú

    const toggleMenu = () => {
        setMenu(!menu);
    }

    // Cierra el menú hamburguesa al hacer clic o tocar fuera de él
    useEffect(() => {
        function handleClickOutside(event) {
            // Verificar si el clic o toque es fuera del menú
            if (
                menuRef.current && !menuRef.current.contains(event.target) && 
                !menuItemsRef.current.some(item => item.contains(event.target))
            ) {
                setMenu(false); // Cierra el menú si no es clic en el menú
            }
        }

        // Escuchar el evento pointerdown (compatible con mouse y táctil)
        document.addEventListener('pointerdown', handleClickOutside);
        return () => {
            // Limpiar el evento cuando el componente se desmonta
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, []);


    return (
        <div className='cont-menuHamburguesa'>
            <div 
                className={`cont-menuHamburguesa__btn ${menu ? 'open' : ''}`} 
                onClick={toggleMenu}
                ref={menuRef}
            >
                <div className='linea-menuHamburguesa'></div>
                <div className='linea-menuHamburguesa'></div>
                <div className='linea-menuHamburguesa'></div>
            </div>
            <div className={`cont-menuHamburguesa__menu ${menu ? 'open' : 'ocultar'}`}>
                <ul className='ul-menuHamburguesa'>
                    <li onClick={toggleMenu}>
                        <Link to='/' ref={el => menuItemsRef.current[0] = el}>Inicio</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/ventas' ref={el => menuItemsRef.current[1] = el}>Ventas</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/alquileres' ref={el => menuItemsRef.current[2] = el}>Alquileres</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/emprendimientos' ref={el => menuItemsRef.current[3] = el}>Emprendimientos</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/internacional' ref={el => menuItemsRef.current[4] = el}>Internacional</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/quienes-somos' ref={el => menuItemsRef.current[5] = el}>Quienes Somos</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/contacto' ref={el => menuItemsRef.current[6] = el}>Contacto</Link>
                    </li>
                    {
                        userLog?.isAdmin === true ? (
                            <>
                                <li onClick={toggleMenu}>
                                    <Link to='/admin/creaPropiedad' ref={el => menuItemsRef.current[6] = el} >Crea Propiedad</Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link to='/admin/propiedades' ref={el => menuItemsRef.current[7] = el}>Lista Props</Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link to='/admin/usuarios' ref={el => menuItemsRef.current[8] = el}>Crea Usuarios</Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link to='/admin/usuarios' ref={el => menuItemsRef.current[9] = el}>Lista Usuarios</Link>
                                </li>
                            </>
                        ) : (
                            <li data-translate>
                                <Link to='/favoritos' className={'navlink-navbarInf'}>Favoritos</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default MenuHamburguesa