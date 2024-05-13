import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <main className=' items-center justify-between'>
        {/* navbar */}
      <div className="nav flex  justify-center space-between justify-between mt-10 px-14">
        <div className="logo flex text-5xl justify-start"></div>

        <ul className="mt-6 text-lime-600 font-bold text-2xl space-x-12">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Contact">Contact</Link>
        </ul>

        <p className="side_btn text-2xl mt-3 text-lime-600 font-bold p-2">
         <Link href="/About/Explore"> Explore</Link></p>
      </div>
    </main>
  )
}

export default Navbar

