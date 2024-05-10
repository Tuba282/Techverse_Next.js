import Link from "next/link";


export default function Balochistan() {
    return (
        <main className="balochistan h-dvh bg-fixed from-white" >
      <div className="div1 flex h-8 justify-center space-between justify-between p-14">
      <div className="flex text-5xl justify-start">Balochistan</div>
      
      <ul className=" text-2xl space-x-12">
        <Link href="/Sindh">Sindh</Link>
        {/* <Link href="/Balochistan">Balochistan</Link> */}
        <Link href="/Panjab">Panjab</Link>
        <Link href="/KPK">KPK</Link>
      </ul>

      <p className="btn flex text-2xl  outline rounded md pr-9 pl-9  pb-9"><Link href="/">Home</Link></p>
      </div>

      {/* hero section */}
      <div className="hero max-w-screen-md mt-48">
        <h1 className="h1 text-6xl pl-24">Balochistan : Unique Cultural Heritage</h1>
        <p className="p1 text-xl pl-24 mt-8">It is the country's largest but least populated province. The people of Balochistan are ethnically diverse, reflecting the mixture of peoples who have settled this region. The Baloch and Pashtun people make up the two major and more distinct ethnic groups. Its capital is Quetta. There are four major physical regions in Balochistan.</p>
      </div>
      {/* city section */}
      <div className="pl-24  mt-4 "><p className="city w-20 border-4 rounded-full text-3xl pl-4 pr-4 pb-4"><Link href="/Balochistan/Quetta">Quetta</Link></p></div>
      

    </main>
    )
}