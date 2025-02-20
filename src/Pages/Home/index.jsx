import React from 'react'
import LandingA from '../../Components/LandingA'
import LandingB from '../../Components/LandingB'
import LandingC from '../../Components/LandingC'
import './styles.css'

function Home() {
    return (
        <div className='cont-home page'>
            <LandingA />
            <LandingB />
            <LandingC />
        </div>
    )
}

export default Home