import React from "react";
import Navbar from "@/app/Components/navbar";
import Footer from "@/app/Components/footer";
import Link from "next/link";

const Explore = () => {
  return (
    <div className="main">
      {/* navbar */}
      <div className="nav flex  justify-center space-between justify-between mt-10 px-14">
        <div className="logo flex text-5xl justify-start"></div>

        <ul className="mt-6 text-lime-600 font-bold text-2xl space-x-12">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Panjab">Projects</Link>
          <Link href="/KPK">Contact</Link>
        </ul>

        <p className="side_btn text-2xl mt-3 text-lime-600 font-bold p-2">
          <Link href="/"> Explore</Link>
        </p>
      </div>
      <div className="about_body mt-12  items-center justify-center px-24">
        <div className="partners">
          <h1 className="text-lime-600 font-bold text-5xl font-mono  ">
            Partners :
          </h1>{" "}
          <p className="flex">
            <ul className="text-xl mt-5 list-decimal">
              ACSHR, in support of following partners, is working to gain the
              trust and confidence among the humanitarian actors in Pakistan and
              also trying to attract funds from various donor and INGOs. The
              partners include:
              <li className="mx-12 mt-6 leading-8 pr-12 leading-9 ">
                Mubashir Bhutta Human Rights Organization
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Reformist's Social Welfare and Development Organization
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Amnat Welfare Organization
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Development and Alternative Foundation
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Ansar Burni Welfare Organization
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Sindh Green Foundation
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                HEAD Social Welfare Organization
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Khadmain-y-Sindh Foundation
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Karachi Social Welfare Organization
              </li>
              <li className="mx-12 leading-8 pr-12 leading-9 ">
                Organization for the Welfare of special persons
              </li>
              <li className="mx-12 mb-6 leading-8 pr-12 leading-9 ">
                Aghosh Welfare Society and Development Association
              </li>
            </ul>
            <div className="partners_img"></div>
          </p>
        </div>
          <h1 className="mt-6 text-lime-600 font-bold text-4xl font-mono">FUNDING SOURCE</h1>
        <p className="text-xl pr-48 mt-4">
          The organization strives to rise funding from both the international
          and local donors to sustain its objectives and activities. It has
          developed accountability and transparency mechanisms in conducting in
          its own projects. The organization has very strict financial
          management policy, systems and control mechanisms. It creates
          cooperation and working relationship with the local business people
          and the international donor agencies.
        </p>
          <h1 className="mt-6 text-lime-600 font-bold text-4xl font-mono">ORGANIZATIONAL STRENGTHS</h1>
        <ul className="text-xl list-disc">
            <li className="mx-12 leading-8 mt-8 pr-12">Sound-vibrant and dynamic BOD and managing team.</li>
            <li className="mx-12 leading-8 pr-12">Dedicated experienced members and volunteers.</li>
            <li className="mx-12 leading-8 pr-12">Fully-equipped office in Karachi.</li>
            <li className="mx-12 leading-8 pr-12">Good relations and cooperation with the government, private and non-profit institutions.</li>
            <li className="mx-12 leading-8 mb-6 pr-12">Support of well-wishers like renowned lecturers, doctors, teachers and professionals, etc.</li>
        </ul>
          <h1 className="mt-6 text-lime-600 font-bold text-4xl font-mono">GOVERNANCE AND MANAGEMENT INSTRUMENTS</h1>
        <ul className="text-xl list-disc">ACSHR is having separate policies on the following issues:
            <li className="mx-12 leading-8 mt-8 pr-12">Human Resource [HR Policy].</li>
            <li className="mx-12 leading-8 pr-12">Board Governance Policy.</li>
            <li className="mx-12 leading-8 pr-12">Volunteers Management Policy.</li>
            <li className="mx-12 leading-8 pr-12">Financial [Financial Management Policy and Accounting System Guideline].</li>
            <li className="mx-12 leading-8 pr-12">Gender [Gender Policy].</li>
            <li className="mx-12 leading-8 pr-12">General Office Procedures.</li>
            <li className="mx-12 leading-8 mb-6 pr-12">Program implementation policy and procedures manual.</li>
        </ul>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Explore;
