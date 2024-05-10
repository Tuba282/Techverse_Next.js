// import Image from "next/image";
import Link from "next/link";


export default function Pakistan() {
  return (
    <main className="main h-dvh bg-fixed from-white" >
      <div className="div1 flex h-8 justify-center space-between justify-between p-14">
      <div className="flex text-5xl justify-start">PAK</div>
      
      <ul className=" text-2xl space-x-12">
        <Link href="/Sindh">Sindh</Link>
        <Link href="/Balochistan">Balochistan</Link>
        <Link href="/Panjab">Panjab</Link>
        <Link href="/KPK">KPK</Link>
      </ul>

      <p className="btn flex text-2xl  outline rounded md pr-9 pl-9  pb-9">Home</p>
      </div>

      {/* hero section */}
      <div className="hero max-w-screen-md mt-48">
        <h1 className="h1 text-6xl pl-24">Interesting Facts about Pakistan</h1>
        <p className="p1 text-xl pl-24 mt-8">The world's largest deep sea port, Gwadar, is in Pakistan. World's highest paved road, the eighth wonder of the world (the China-Pakistan friendship highway or the Karakoram Highway) is in Pakistan! Pakistan's Edhi Foundation proudly runs the world's largest volunteer ambulance service.</p>
      </div>
      
    </main>
    
  )
}
