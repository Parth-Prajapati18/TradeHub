"use client"
import React from 'react'
import Image from 'next/image'
import { SecondaryFeatures } from './components/SecondaryFeatures'
import PrimaryFeatures from './components/PrimaryFeatures'
import { useUser } from './context/usercontext'

function Home() {
  return (
    <div className='mt-4 md:mt-32'>

      <div className='w-full h-[30vh] md:h-[45vh] relative mx-auto'>
        <Image
          src='/HomeBanner.png'
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          alt='TradeHub'
        />
      </div>

      <div className="mt-1 md:mt-20 mx-auto max-w-2xl sm:text-center">
        <h2 className="text-4xl font-medium tracking-tight text-gray-900">
          Invest in everything
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>
        <button className='md:text-xl font-medium text-white bg-blue-500 py-2 px-8 mt-4 md:mt-6'>Sign up now</button>
      </div>

      <PrimaryFeatures />
      <SecondaryFeatures />

    </div>
  )
}

export default Home