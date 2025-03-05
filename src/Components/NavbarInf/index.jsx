import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/logo-blanco.webp';
import LanguageSelector from '../CambiaIdioma';
import MenuHamburguesa from '../MenuHamburguesa';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import './styles.css';

function NavbarInf({logout, userLog}) {

    //estado menú Admin
    const [muestraMenuAdmin, setMuestraMenuAdmin] = useState(false);

    const handleMouseEnterAdmin = () => {
        setMuestraMenuAdmin(true);
    };
    const handleMouseLeaveAdmin = () => {
        setMuestraMenuAdmin(false);
    };

    return (
        <div className='cont-navbarInf'>
            <div className='sub-cont-navbarInf'>
                <div className='col-1-navbarInf'>
                    <MenuHamburguesa />
                </div>
                <div className='col-2-logo-navbarInf'>
                    <NavLink to='/' className='navlink-navbarInf'>
                        <img src={Logo} alt='Logo' className='logo-navbarInf' />
                    </NavLink>
                </div>
                <div className='col-2-navbarInf'>
                    <ul className='ul-navbarInf'>
                        <li data-translate>
                            <NavLink to='/venta' >
                                Venta
                            </NavLink>
                        </li>
                        <li data-translate>
                            <NavLink to='/alquiler' >
                                Alquiler
                            </NavLink>
                        </li>
                        <li data-translate>
                            <NavLink to='/emprendimientos' >
                                Emprendimientos
                            </NavLink>
                        </li>
                        <li data-translate>
                            <NavLink to='/internacional' >
                                Internacional
                            </NavLink>
                        </li>
                        {
                            userLog?.isAdmin === false && (
                                <li data-translate>
                                    <NavLink to='/favoritos' >
                                        Favoritos
                                    </NavLink>
                                </li>
                            )
                        }
                        <li data-translate>Nosotros</li>
                        <li data-translate>Contacto</li>
                        {
                            userLog?.isAdmin && (
                                <li
                                    className='navbar-item-admin'
                                    onMouseEnter={handleMouseEnterAdmin}
                                    onMouseLeave={handleMouseLeaveAdmin}
                                >
                                    Admin
                                    {/* menú admin */}
                                    {
                                        muestraMenuAdmin && (
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/creaPropiedad' className='link-menu' >
                                                        Crea Propiedad                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/listaPropsAdmin' className='link-menu' >
                                                        Lista Propiedades                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/creaUsuario' className='link-menu' >
                                                        Crea Usuario                                        
                                                    </NavLink>
                                                </li>
                                                <li className="dropdown-item">
                                                    <NavLink to='/admin/listaUsuarios' className='link-menu' >
                                                        Lista Usuarios
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                                
                            )
                        }
                    </ul>
                </div>
                <div className='col-3-navbarInf'>
                    <LanguageSelector />
                </div>
                {/* login/logout */}
                <div>
                    {
                        userLog?.nombre ? (
                            <button onClick={logout} className='btn-navbarInf'>
                                <LogoutIcon sx={{color:'white', marginLeft:'5px'}}/>
                            </button>
                        ) : (
                            <NavLink to='/login' className='navlink-navbarInf'>
                                <LoginIcon sx={{color:'white', marginLeft:'5px'}}/>
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default NavbarInf;
