import React, { useEffect } from 'react';
import LandingA from '../../Components/LandingA';
import LandingB from '../../Components/LandingB';
import LandingC from '../../Components/LandingC';
import LandingMuestraTarjetas from '../../Components/LandingMuestraTarjetas';
import './styles.css';


function Home() {



    return (
        <div className='cont-home page'>
            <LandingA />
            <LandingB />
            <LandingC />
            <LandingMuestraTarjetas />
        </div>
    )
}

export default Home