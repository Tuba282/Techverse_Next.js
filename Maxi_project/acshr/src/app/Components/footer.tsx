import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <main className=' items-center justify-between'>
        <div className="location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.6345469691!2d67.11321412211105!3d24.952207965937735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3388318252ead%3A0x3b6d94b040b4b7ed!2sSachal%20Goth%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715377034451!5m2!1sen!2s" width= "100%" height="150"  style={{}} >
          </iframe>
          </div>
        <div className="footer flex justify-center space-between justify-between mt-5 px-14 bg-lime-200 pt-10">
          <div className="foot1 items-center ">
          </div>

          <div className="foot2 w-88">
            <h2 className="text-xl font-mono ">Links</h2><br /> <b>Head Branch</b>
            <p><b>Address </b>: A<b>-</b>104<b>/</b>1<b>,</b> SACHAL GOTH RESIDENCY<b>,</b> PCSIR SCHEME 33<b>,</b> DISTRICT EASTKARACHI</p>
            <p><b>Facebook</b> : ALLIANCE OF THE CIVIL SOCIETY FOR HUMAN RIGHTS</p>
            <p><b>Phone </b>: 0333-7335483<b>,</b> 0300-2575133<b>,</b> 0332-8786028<b>,</b> 0334-3667824</p>
          </div>

          <div className="foot3 w-64">
            <h2 className="text-xl font-mono ">Site Links</h2><br />
            <p><b>Website</b> : <u>www.acshr.org.pk/</u></p>
            <p><b>Email</b> : <u>acshr2021@gmail.com</u></p>
          </div>
          <br />
        </div>
        
        <div className="foot4 text-center bg-lime-200"><br /><br />
        <div className="footerlinks">
        <ul className="mt-2 text-black font-bold text-xl mb-2 space-x-12">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Contact">Contact</Link>
        </ul>
          </div>
         <hr className="text-black-500"/>© 2024 www.acshr.com, All rights reserved.</div>
        
    </main>
  )
}

export default Footer