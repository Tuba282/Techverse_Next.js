import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Link from "next/link";

const Projects = () => {
  return (
    <main className="min-h-screen items-center justify-between">
      <Navbar />
      {/* gallery section */}
      <center>
        <h1 className="pl-24 text-5xl font-mono font-bold text-lime-600">
          <b>Our Projects Gallery</b>
        </h1>
      </center>
      <div className="gallery flex mt-12 px-24 pr-5">
        <div className="pro_img1 m-3 p-4"></div>
        <div className="pro_img2 m-3 p-4"></div>
        <div className="pro_img3 m-3 p-4"></div>
      </div>
      <div className="gallery flex mt-12 px-24 pr-5">
        <div className="pro_img4 m-3 p-4"></div>
        <div className="pro_img5 m-3 p-4"></div>
        <div className="pro_img6 m-3 p-4"></div>
      </div>
      <div className="gallery flex mt-12 px-24 pr-5">
        <div className="pro_img7 m-3 p-4"></div>
        <div className="pro_img8 m-3 p-4"></div>
        <div className="pro_img9 m-3 p-4"></div>
      </div>
      <br />
      <br />
      <center>
        {" "}
        <p className="table_side_btn text-2xl mt-8 text-lime-600 font-bold p-2 mb-6">
          <Link href="/Projects/Details">For Projects Details click here</Link>
        </p>
      </center>

      <Footer />
    </main>
  );
};

export default Projects;
