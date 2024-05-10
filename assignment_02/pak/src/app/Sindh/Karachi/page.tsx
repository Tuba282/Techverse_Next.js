import Link from "next/link";
import Image from "next/image";

export default function Karachi() {
  return (
    <main className="karachi h-dvh w-full h-8 justify-center items-center space-between justify-even p-14">
      
      <center><h1 className="text-5xl justify-start text-white mb-10">Karachi</h1></center>
      <div className="flex grid-rows-4">
        <div className="m-4" id="_1__"></div>
        <div className="m-4" id="_2__"></div>
        <div className="m-4" id="_3__"></div>
        <div className="m-4" id="_4__"></div>
        <div className="m-4" id="_5__"></div>
        <div className="m-4" id="_6__"></div>
        <div className="m-4" id="_7__"></div>
        <div className="m-4" id="_8__"></div>
      </div>

      <center><h1 className="text-5xl justify-start text-white mt-10"><Link href="/">Back</Link></h1></center>
    </main>
  );
}
