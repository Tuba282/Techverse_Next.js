import Link from "next/link";
import Image from "next/image";

export default function Lahore() {
  return (
    <main className="lahore h-dvh w-full h-8 justify-center items-center space-between justify-even p-14">
      
      <center><h1 className="text-5xl justify-start text-white mb-10">Lahore</h1></center>
      <div className="flex grid-rows-4">
        <div className="m-4" id="_1"></div>
        <div className="m-4" id="_2"></div>
        <div className="m-4" id="_3"></div>
        <div className="m-4" id="_4"></div>
        <div className="m-4" id="_5"></div>
        <div className="m-4" id="_6"></div>
        <div className="m-4" id="_7"></div>
        <div className="m-4" id="_8"></div>
      </div>

      <center><h1 className="text-5xl justify-start text-white mt-10"><Link href="/">Back</Link></h1></center>
    </main>
  );
}
