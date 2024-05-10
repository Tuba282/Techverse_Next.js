import Link from "next/link";


export default function KPK() {
    return (
        <main className="kpk h-dvh bg-fixed from-white" >
      <div className="div1 flex h-8 justify-center space-between justify-between p-14">
      <div className="flex text-5xl justify-start">KPK</div>
      
      <ul className=" text-2xl space-x-12">
        <Link href="/Sindh">Sindh</Link>
        <Link href="/Balochistan">Balochistan</Link>
        <Link href="/Panjab">Punjab</Link>
        {/* <Link href="/KPK">KPK</Link> */}
      </ul>

      <p className="btn flex text-2xl  outline rounded md pr-9 pl-9  pb-9"><Link href="/">Home</Link></p>
      </div>

      {/* hero section */}
      <div className="hero max-w-screen-lg mt-48">
        <h1 className="h1 text-6xl pl-24">KPK : Hospitable Nature</h1>
        <p className="p1 text-xl pl-24 mt-8">Khyber Pakhtunkhwa is the third-largest province of Pakistan by the size of both population and economy, though it is geographically the smallest of four. The province is the site of the ancient kingdom Gandhara, including the ruins of its capital Pushkalavati near modern-day Charsadda. Originally a stronghold of Buddhism, the history of the region was made up of frequent invasions under various Empires due to its geographical closes to the Khyber Pass.</p>
      </div>

    </main>
    )
}