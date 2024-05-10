import Link from "next/link";


export default function Panjab() {
    return (
        <main className="punjab h-dvh bg-fixed from-white" >
      <div className="div1 flex h-8 justify-center space-between justify-between p-14">
      <div className="flex text-5xl justify-start">Punjab</div>
      
      <ul className=" text-2xl space-x-12">
        <Link href="/Sindh">Sindh</Link>
        <Link href="/Balochistan">Balochistan</Link>
        {/* <Link href="/Panjab">Punjab</Link> */}
        <Link href="/KPK">KPK</Link>
      </ul>

      <p className="btn flex text-2xl  outline rounded md pr-9 pl-9  pb-9"><Link href="/">Home</Link></p>
      </div>

      {/* hero section */}
      <div className="hero max-w-screen-md mt-48">
        <h1 className="h1 text-6xl pl-24">Punjab : Prosperous States</h1>
        <p className="p1 text-xl pl-24 mt-8">Punjab means the land of five rivers. The word has been derived from the Persian words panj (five) and aab (water). The five rivers namely Beas, Chenab, Jhelum, Ravi and Sutlej ran through pre-Independence Punjab, and are now divided between India and Pakistan.</p>
      </div>
      {/* city section */}
      <div className="pl-24  mt-4 "><p className="city w-20 border-4 rounded-full text-3xl pl-4 pr-4 pb-4"><Link href="/Panjab/Lahore">Lahore</Link></p></div>
      <div className="pl-24  mt-4 pr-24"><p className="cap-city w-25 border-4 rounded-full text-3xl pl-4 pr-4 pb-4"><Link href="/Panjab/Islamabad">Islamabad</Link></p></div>
    </main>
    )
}