import React from 'react'
import LandingA from '../../Components/LandingA'
import LandingB from '../../Components/LandingB'
import './styles.css'

function Home() {
    return (
        <div className='cont-home page'>
            <LandingA />
            <LandingB />
        </div>
    )
}

export default Home