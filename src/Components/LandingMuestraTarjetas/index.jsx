import React, { useEffect, useRef, useState } from 'react';
import CardLanding from '../CardLanding';
import ImgCardVenta from '../../Images/prop3_landing.webp';
import './styles.css';

function LandingMuestraTarjetas() {
    const tarjetasRef = useRef([]);
    const [visibleIndex, setVisibleIndex] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setVisibleIndex((prev) => [...prev, index]);
                    }
                });
            },
            { threshold: 0.3 }
        );

        tarjetasRef.current.forEach((tarjeta, index) => {
            if (tarjeta) observer.observe(tarjeta);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='cont-muestra-tarjetas'>
            <h1 className='titulo-tarjetas'>Nuestras Propiedades</h1>
            <div className='cont-tarjetas'>
                <div
                    ref={(el) => (tarjetasRef.current[0] = el)}
                    className={`cont-tarjeta-1 ${visibleIndex.includes(0) ? 'animada' : ''}`}
                >
                    <CardLanding imagen={ImgCardVenta} titulo='Propiedades en Venta' />
                </div>
                <div
                    ref={(el) => (tarjetasRef.current[1] = el)}
                    className={`cont-tarjeta-2 ${visibleIndex.includes(1) ? 'animada' : ''}`}
                >
                    <CardLanding imagen={ImgCardVenta} titulo='Propiedades en Alquiler' />
                </div>
                <div
                    ref={(el) => (tarjetasRef.current[2] = el)}
                    className={`cont-tarjeta-3 ${visibleIndex.includes(2) ? 'animada' : ''}`}
                >
                    <CardLanding imagen={ImgCardVenta} titulo='Emprendimientos' />
                </div>
                <div
                    ref={(el) => (tarjetasRef.current[3] = el)}
                    className={`cont-tarjeta-4 ${visibleIndex.includes(3) ? 'animada' : ''}`}
                >
                    <CardLanding imagen={ImgCardVenta} titulo='Propiedades en el Exterior' />
                </div>
            </div>
        </div>
    );
}

export default LandingMuestraTarjetas;
