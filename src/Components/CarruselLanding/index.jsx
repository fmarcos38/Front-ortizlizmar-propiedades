import React, { useState, useEffect } from 'react';
import Img1 from '../../Images/prop1_landing.webp';
import Img2 from '../../Images/prop2-landing.webp';
import Img3 from '../../Images/prop3_landing.webp';
import Img4 from '../../Images/prop4_landing.webp';
import Img5 from '../../Images/prop5_landing.webp';
import './styles.css';

function CarruselLanding() {
    const images = [Img1, Img2, Img3, Img4, Img5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <img 
            src={images[currentIndex]} 
            alt="not found" 
            className="imgCarruselLanding"
        />
    );
}

export default CarruselLanding;
