"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, handelClick, btnType, containerStyles, spanstyle}: CustomButtonProps) => {
  return (
    <div className='m-4'> 
        <button 
    type={btnType || "button"}
    onClick={handelClick}
    className={containerStyles}>
  <span className={spanstyle}>
  {title}
  </span>
</button>
    </div>

  )
}

export default CustomButton