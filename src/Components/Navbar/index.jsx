import React from 'react'
import NavbarSup from '../NavbarSup';
import NavbarInf from '../NavbarInf';
import './styles.css'


function Navbar() {


    return (
        <nav className="navbar">
            <NavbarSup />
            <NavbarInf />
        </nav>
    )
}

export default Navbar