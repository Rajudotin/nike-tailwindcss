import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-full h-auto object-cover rounded-lg hover:scale-110 hover:shadow-2xl transistion-transform transistion-shadow duration-300'/>
        <div className='mt-4 flex justify-start gap-x-2.5'>
            <img src={star} alt="rating" width={24} height={24} />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>4.5</p>
        </div>
        <h3 className='font-palanquin text-2xl font-bold mt-2'>{name}</h3>
        <p className='font-montserrat text-xl leading-normal text-coral-red mt-1'>{price}</p>
    </div>
  )
}

export default PopularProductCard