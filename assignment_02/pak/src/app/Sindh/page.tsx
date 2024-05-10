import Link from "next/link";


export default function Sindh() {
    return (
        <main className="sindh h-dvh bg-fixed from-white" >
      <div className="div1 flex h-8 justify-center space-between justify-between p-14">
      <div className="flex text-5xl justify-start">Sindh</div>
      
      <ul className=" text-2xl space-x-12">
        {/* <Link href="/Sindh">Sindh</Link> */}
        <Link href="/Balochistan">Balochistan</Link>
        <Link href="/Panjab">Punjab</Link>
        <Link href="/KPK">KPK</Link>
      </ul>

      <p className="btn flex text-2xl  outline rounded md pr-9 pl-9  pb-9"><Link href="/">Home</Link></p>
      </div>

      {/* hero section */}
      <div className="hero max-w-screen-lg mt-48">
        <h1 className="h1 text-6xl pl-24">Sindh : Diverse Geography</h1>
        <p className="p1 text-xl pl-24 mt-8">Sindh has an agriculture-based economy and produces fruits, consumer goods, and vegetables. Sindh is known for its culture, contemporary with the civilizations of ancient Egypt and Mesopotamia, is home to two UNESCO World Heritage Sites - the Historical Monument at Makli, and the Archaeological Ruins at Mohenjodaro.</p>
      </div>

      <div className="pl-24  mt-4 "><p className="karachi_city w-20 border-4 rounded-full text-3xl pl-4 pr-4 pb-4"><Link href="/Sindh/Karachi">Karachi</Link></p></div>

    </main>
    )
}