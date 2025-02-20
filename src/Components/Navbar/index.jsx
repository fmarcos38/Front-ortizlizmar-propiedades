import React, { useState, useEffect } from 'react';
import NavbarSup from '../NavbarSup';
import NavbarInf from '../NavbarInf';
import './styles.css'


function Navbar() {

    //efecto paraa el scroll
    const[scrolled, setScrolled] = useState(false);

    //efecto para el scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <NavbarSup />
            <NavbarInf />
        </nav>
    )
}

export default Navbar