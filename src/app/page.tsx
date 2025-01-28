import React, { Component } from 'react'
import Hero from './component/Hero'
import Shop from '@/shop/page'
function Home() {
  return (
    <div className='w-full-2xl mx-auto'>

      <Hero/>
       <Shop />
    </div>
  )
}

export default Home