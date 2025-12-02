import React from 'react'
import { features } from '../../utils/constants'
import Cards from '../../utils/Cards'

const Features = () => {
  return (
    <div>
       <div className="mx-auto max-w-7xl mt-12 px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-[font4] text-4xl md:text-6xl leading-tight">
           <span className="primary-gradient-text">AI-Powered </span>Payment Recovery
        </h2>
        <p className="mt-3 font-[font5] text-lg md:text-2xl text-gray-500">
            Automate your payment follow-ups with intelligent messaging that gets results
        </p>
        <div className='mt-10'>
          <Cards reasons={features}/>
        </div>
        </div>
    </div>
  )
}

export default Features
