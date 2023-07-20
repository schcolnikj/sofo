"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {}

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                SOFO
            </h1>
            
            <p className="hero__subtitle">
                Helados
            </p>

            <CustomButton
                title="Haz tu pedido"
                containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
            
        </div>
        <div className="hero__image-container">
            <div className='hero__image'>
                <Image src="/helado-dulce-de-leche.png" alt="SofoHelados"
                    fill className="object-contain" />
            </div>
                
            <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero