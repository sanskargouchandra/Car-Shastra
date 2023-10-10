"use client"
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {

    const handleScroll = () =>{

    }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Book or Rent Car-Quickly and Easily!!</h1>
        <p className="hero__subtitle">
          With Flexible Bookings & No Hidden Fees, Secure Your Car Rental at The
          Best Price Now...
        </p>

        <CustomButton 
        title = "Explore Cars"
        handelClick={handleScroll}
        containerStyles="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
