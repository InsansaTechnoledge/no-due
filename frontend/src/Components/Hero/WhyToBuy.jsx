import React from 'react'
import Cards from '../../utils/Cards'
import { reasons } from '../../utils/constants'


const WhyToBuy = () => {
  return (
    <div>
       <div className="mx-auto max-w-7xl mt-12 px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-[font4] text-4xl md:text-6xl leading-tight">
            Chasing payments wastes <span className="primary-gradient-text">time & money</span>
        </h2>
        <p className="mt-3 font-[font5] text-lg md:text-2xl text-gray-500">
            Most businesses lose thousands of hours and rupees every year on manual payment recovery
        </p>
        <div className='mt-8'>
            <Cards reasons={reasons}/>
        </div>
      </div>
    </div>
  )
}

export default WhyToBuy
