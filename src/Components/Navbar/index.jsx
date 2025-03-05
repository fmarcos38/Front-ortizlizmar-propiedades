import React, { useState, useEffect, useContext } from 'react';
import { InmobiliariaContext } from '../../Context';
import { logout } from '../../localStorage';
import { resetLogin, getUsuario } from '../../Redux/Actions';
import NavbarSup from '../NavbarSup';
import NavbarInf from '../NavbarInf';
import Swal from 'sweetalert2';
import './styles.css';
import { useDispatch } from 'react-redux';


function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const context = useContext(InmobiliariaContext);
    const userLog = context.userLog;
    const dispatch = useDispatch();

    //logout
    const handleLogOut = () => {
        Swal.fire({
            title: "Salir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                context.setUserLog(null);
                context.logout();
                dispatch(resetLogin());
            }
            //redirijo a home
            window.location.href = '/';
        });        
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 500) { // Solo aplica el efecto en pantallas mayores a 500px
                if (window.scrollY > 1400) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            } else {
                setScrolled(false); // En pantallas menores a 500px, mantiene la navbar fija
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if(userLog?.user?._id) {
            dispatch(getUsuario(userLog?.user?._id));
        }
    }, [dispatch, userLog?.user?._id]);


    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <NavbarSup />
            <NavbarInf 
                logout={handleLogOut}
                userLog={userLog?.user}
            />
        </nav>
    );
}

export default Navbar;
