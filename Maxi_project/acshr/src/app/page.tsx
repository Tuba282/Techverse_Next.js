import Image from "next/image";
import Link from "next/link";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between">
      {/* {navbar} */}
      <Navbar/>
      {/* hero section */}
      <div className="hero h-28 "></div>
      {/* body part */}
      <div className="body p-10">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <div className=" img1 object-cover object-center h-full w-full"></div>
                </div>{" "}
                <br />
                <p className="px-20 text-xl">
                  Improve and sustainable livelihood of vulnerable communities
                  in Pakistan through environmentally sound interventions while
                  focusing on human rights, equality, good governance, justice
                  and democracy.
                </p>
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  <Link href="/About/Explore">Explore more</Link>
                </button>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <div className=" img2 object-cover object-center h-full w-full"></div>
                </div>{" "}
                <br />
                <p className="px-20 text-xl">
                  ACSHR strives to ultimately see a stable and economical strong
                  Pakistani society living in harmony, peace, good governance,
                  rule of law, human rights and sustainable resource management.
                </p>
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  <Link href="/About/Explore">Explore more</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* aims & objects */}
      <div className="aims">
        <h2 className="pl-24 text-5xl font-mono font-bold text-lime-600">
          Aims & Objectives :
        </h2>
        <br />
        <br />
        <ul className="w-full px-24 list-disc text-xl">
          <li className="leading-10">
            Reduce malnutrition and food insecurity that cause irreparable
            damage to livelihoods, thereby reducing self-sufficiency through
            introducing sustainable food security and livelihoods improvement
            initiatives
          </li>
          <li className=" leading-10">
            Increase access to education for children from poor and vulnerable
            groups while strengthening the quality and capacity of teachers,
            teaching/learning environment and institutional structures
          </li>
          <li className=" leading-10">
            Increased sustainable access to safe water and sanitation services
            for men, women and children in rural and urban.
          </li>
          <li className=" leading-10">
            Increase access to primary health care services to vulnerable groups
            and locations.
          </li>
          <li className=" leading-10">
            Increase public environmental awareness and advocacy through
            trainings, meetings, media etc
          </li>
          <li className=" leading-10">
            Build the capacity of local CBOs, women groups, youth groups in
            better management practices, service delivery etc
          </li>
          <li className=" leading-10">
            To enhance education and skills training access to youth and adults
            to promote employment opportunities.
          </li>
          <li className=" leading-10">
            Enhance peace building, human rights and democracy promotion.
          </li>
          <li className=" leading-10">
            Promote and advocate for gender sensitive approaches to enhance
            women's rights and girl-child education and strengthen the
            participation and involvement of women and vulnerable groups in
            programs and organization.
          </li>
          <li className=" leading-10">
            Improve the protection of and respect for the human rights and
            dignity of vulnerable populations with a special focus on IDPs,
            women, children and marginalized groups through effective advocacy
            and the application of a rights-based approach across all sectors.
          </li>
        </ul>
        <br />
        <br />
      </div>
        <center>
          <h2 className="text-6xl font-bold text-lime-600 font-mono">
            Organogram
          </h2>
        </center>
        <br />
        <br />
        <br />
        <div className="img3"></div>
        <br />
        {/* footer */}
        <Footer/>
    </main>
  );
}
