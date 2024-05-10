import Link from "next/link";
import Image from "next/image";

export default function Islamabad() {
  return (
    <main className="islamabad h-dvh w-full h-8 justify-center items-center space-between justify-even p-14">
      
      <center><h1 className="text-5xl justify-start text-white mb-10">Islamabad</h1></center>
      <div className="flex grid-rows-4">
      <div className="m-4" id="_1_"></div>
        <div className="m-4" id="_2_"></div>
        <div className="m-4" id="_3_"></div>
        <div className="m-4" id="_4_"></div>
        <div className="m-4" id="_5_"></div>
        <div className="m-4" id="_6_"></div>
        <div className="m-4" id="_7_"></div>
        <div className="m-4" id="_8_"></div>
      </div>

      <center><h1 className="text-5xl justify-start text-white mt-10"><Link href="/">Back</Link></h1></center>
    </main>
  );
}
