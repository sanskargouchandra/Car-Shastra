
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaGasPump } from "react-icons/fa";

import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelBold } from "react-icons/pi";
function CarCard(props:any) {
    const [car,setCar]=useState<any>();

    useEffect(()=>{
        if(props.car)
        {
            setCar(props.car)
        }
    },[props.car])
  return car&&(
    <div 
    className='group bg-white p-2 sm:p-5 rounded-3xl m-1 sm:m-5
    scale-100 hover:scale-90 ease-in duration-700  
hover:border-[1px] cursor-pointer duration-50
border-blue-500 '>
    <h2 className='text-[30px] font-medium mb-2 text-black'>{car.carBrand} {car.name}</h2>
    <h2 className='text-[28px] font-bold mb-2 text-black'>
        <span className='text-[18px] font-light text-black'>&#8377;</span>
        {car.price}
        <span className='text-[12px] font-light'> /day</span></h2>
        <div className='flex justify-center'>
    <Image src={car?.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className='w-[250px] h-[150px] 
        mb-3 object-contain' />
</div>
    <div className='flex justify-around group-hover:hidden'>
        <div className='text-center text-gray-500'>
            <PiSteeringWheelBold className="w-full text-[22px] mb-2" />
            <h2 className='line-clamp-5 text-[14px] font-light'>{car?.carType}</h2>
        </div>
        <div className='text-center text-gray-500'>
            <MdAirlineSeatReclineNormal  className="w-full text-[22px] mb-2" />
            <h2 className='line-clamp-5 text-[14px] font-light'>{car.seat} Seat</h2>
        </div>
        <div className=' text-center text-gray-500 '>
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg} MPG</h2>
        </div>
    </div>
    <button className='w-full hidden group-hover:flex bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce flex justify-center'
    >
        Rent Now
    </button>
</div>
  )
}

export default CarCard