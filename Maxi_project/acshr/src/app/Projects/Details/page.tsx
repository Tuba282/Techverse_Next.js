import Footer from '@/app/Components/footer'
import Navbar from '@/app/Components/navbar'
import React from 'react'
import Link from 'next/link'

const Details = () => {
  return (
    <div>
        {/* navbar */}
        <Navbar/>
        <center><h1 className="pl-24 text-5xl font-mono font-bold text-lime-600 mb-6">Projects Accomplishments Details </h1></center>
        <div className="flex">
        <div className="table_img_1  p-4"></div>
        <div className="table_img_2  p-4"></div>
        </div>

        <Footer/>
    </div>
  )
}

export default Details