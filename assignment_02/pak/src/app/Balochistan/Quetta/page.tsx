import Link from "next/link";
import Image from "next/image";

export default function Quetta() {
  return (
    <main className="queta h-dvh w-full h-8 justify-center items-center space-between justify-even p-14">
      
      <center><h1 className="text-5xl justify-start text-white mb-10">Quetta</h1></center>
      <div className="flex grid-rows-4">
        <div className="m-4" id="one"></div>
        <div className="m-4" id="two"></div>
        <div className="m-4" id="three"></div>
        <div className="m-4" id="four"></div>
        <div className="m-4" id="five"></div>
        <div className="m-4" id="six"></div>
        <div className="m-4" id="seven"></div>
        <div className="m-4" id="eight"></div>
      </div>

      <center><h1 className="text-5xl justify-start text-white mt-10"><Link href="/">Back</Link></h1></center>
    </main>
  );
}
