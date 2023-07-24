"use client";

import { useState } from 'react'
import Image from 'next/image';

import { FlavorProps } from '@/types';
import CustomButton from './CustomButton';
import FlavorDetails from './FlavorDetails';

interface FlavorCardProps {
    flavor: FlavorProps;
}

const FlavorCard = ({ flavor }: FlavorCardProps) => {
    const { name, descripcion, imagen } = flavor;

    const [isOpen, setIsOpen] = useState(false)
    
    
  return (
    <div className='car-card group'>
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>
                {name}
            </h2>
        </div>

        {/* <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px]
            font-semibold'>
                S O F O  | H E L A D O S
            </span>    
        </p> */}

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={imagen}  
            alt={name} fill priority className='object-contain' />
        </div>


        <div className="relative flex w-full mt-2">
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className="flex flex-col justify-center items-center gap-2">
                    {/* <Image src="/sinTACC.png" width={20} height={20} alt="icono celiaco?"/> */}
                    <p className="text-[24px]">
                        <span className='self-start text-[14px]
                        font-semibold'>
                            Clickeá para ver la descripción...
                        </span>    
                        
                    </p>
                </div> 
            </div>
            <div className='car-card__btn-container'>
                <CustomButton
                    title= 'Ver Descripción'
                    containerStyles='w-full py-[16px]
                    rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>

        <FlavorDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} flavor={flavor} />
    </div>
  )
}

export default FlavorCard