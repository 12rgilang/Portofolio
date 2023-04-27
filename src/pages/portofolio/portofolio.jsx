import { useState } from "react";
import "../portofolio/portofolio.css";
import html from "./../supports/porto/html-css.png";
import commerce from "./../supports/porto/e-commerce.png";
import porto from "./../supports/porto/Responsive-porto.png"
import Vcation from "./../supports/porto/vcation.png"
import sertifikat from "./../supports/porto/Udemy-sertif.png"
import ifrit from "./../supports/porto/Ifrit.png"
import groceries from "./../supports/porto/Groceries.png"

let Portofolio = () => {
  const [data, setData] = useState([
    {
      framework: "MERN (MySQL, Express, React-js, Node-js)",
      role: "Fullstack",
      site: "Vcation Property Renting Web APP",
      url: "https://jcwd230203.purwadhikabootcamp.com/",
      code: "https://github.com/12rgilang/JCWD230203.git",
      image: Vcation,
      description: "An online tool known as an e-commerce application that allows customers to compare hotel costs according to specific dates. Prices for each type of lodging will vary and depend on a number of variables, including national holidays, holidays that coincide with collective leave, and specific dates that are explicitly selected."
    },
    {
      framework: "MERN (MySQL, Express, React-js, Node-js)",
      role: "Fullstack",
      site: "Multi-Warehouse E-Commerce",
      url: "https://jcwd230201.purwadhikabootcamp.com/",
      code: "https://github.com/12rgilang/E-Commerce_Multi_WareHouse.git",
      image: ifrit,
      description: "Multiple Storage E-commerce is an e-commerce application that uses several warehouses to store items. This is being used in order to decrease transportation costs while also speeding up delivery. The system will immediately transmit any new orders from the user's address to the closest warehouse when they come in. Order processing is the responsibility of the admin on duty at that location until it is finished. The amount the user will pay for shipping will depend on how far the chosen warehouse is from their address."
    },
    {
      framework: "MERN (MySQL, Express, React-js, Node-js)",
      role: "Fullstack",
      site: "Groceries E-Commerce",
      url: "https://jcwd230202.purwadhikabootcamp.com/",
      code: "https://github.com/12rgilang/Online_Groceries.git",
      image: groceries,
      description: "an online shopping tool that allows the user to pick the store's location. The retail establishment has a number of outlying branches. Each store sells the same item; businesses in other places are branches. Users and admins, who serve as shop managers, are two different categories of users in this program. The ability to modify discount features and apply them throughout the item purchase process is one of this online store's benefits."
    },
    {
      framework: "React-js",
      role: "Front-End",
      site: "Responsive Portofolio",
      url: "https://gilangporto.vercel.app/",
      code: "https://github.com/12rgilang/Portofolio.git",
      image: porto,
      description: "Responsive portofolio using React-js and tailwind CSS"
    },
    {
      framework: "HTML-CSS",
      role: "Front-End",
      site: "Simple CV",
      url: "https://gilangramadhan.netlify.app/",
      code: "https://github.com/12rgilang/Portofolio_HTML-CSS.git",
      image: html,
      description:
        "Making a simple CV using HTML and CSS, not responsive and containing my short story",
    },
    {
      framework: "React-Js",
      role: "Fullstack",
      site: "e-commerce",
      url: "https://gilang-e-commerce.netlify.app",
      code: "https://github.com/12rgilang/porto-e-commerce-fe.git",
      image: commerce,
      description:
        "Making a copy of starbucks e-commerce using a ReactJs and JSONserver typicode for a sample database. *ps Due to limited resources i have, its not fully working, fully working web is on my localhost.",
    },
  ]);

  const [idxSelected, setIdxSelected] = useState(0);
  const [idxSelectedSertif, setIdxSelectedSertif] = useState(0)

  let onChange = (idx) => {
    setIdxSelected(idx);
  };

  let onChangeSertif = (idx) => {
    setIdxSelectedSertif(idx)
  }

  const [sertif, setSertif] = useState([
    {
      site: "Udemy Certificate",
      url: "https://drive.google.com/file/d/1tpMuREx8aBsLCi-V6eKy3MXd38gnuyjC/view?usp=sharing",
      code: "https://drive.google.com/uc?export=download&id=1tpMuREx8aBsLCi-V6eKy3MXd38gnuyjC",
      image: sertifikat,
      description: "Certificate Completion from UDEMY For FULLSTACK WEB DEVELOPER"
    },
  ])

  return (
    <>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2">
        <div className="left">
          <div className="mt-10 flex justify-center items-center text-3xl font-bold mb-4 display-5 tittle" data-aos="zoom-in-right">
           MY PROJECT
          </div>
        <div
        className="card flex items-center justify-center mx-auto md:mt-[50px] md:mb-[100px] "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {/* Card */}
        <div className="flex justify-center my-5 sm:my-0">
          <div className="rounded-lg shadow-lg my-bg-light max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={data[idxSelected].image}
                alt="My porto"
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {data[idxSelected].site}
              </h5>
              <p className="text-gray-700 text-base text-justify mb-56 h-[100px]">
                {data[idxSelected].description}
              </p>
              <p className="text-gray-700 text-base mb-2 md:mb-2">
               Role: {data[idxSelected].role}
              </p>
              <div className="wrapper flex">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 my-bg-main text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg 0focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mr-2"
                >
                  <a href={data[idxSelected].url}>Visit the web Here </a>
                </button>

                <button 
                type="button"
                className="px-6 py-2.5 my-bg-ligh font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg 0focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  <a href={data[idxSelected].code} className="btn my-main">
                    Source Code
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="inline-flex flex-col" role="toolbar">
          {data.map((value, index) => {
            return (
              <button
                type="button"
                className="button rounded-full inline-block px-6 py-2.5 my-2 mx-2 my-light my-fs-15 transition duration-150 ease-in-out"
                key={index}
                onClick={() => onChange(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
        </div>


        {/* Right */}
        <div className="right">
          <p className="flex justify-center items-center mt-10 text-3xl font-bold mb-4 display-5  tittle" data-aos="zoom-in-right">CERTIFICATE
          </p>
          <div
        className="card flex items-center justify-center mx-auto md:mt-[50px] md:mb-[100px] "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {/* Card */}
        <div className="flex justify-center my-5 sm:my-0">
          <div className="rounded-lg shadow-lg my-bg-light max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src={sertif[idxSelectedSertif].image}
                alt="My porto"
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {sertif[idxSelectedSertif].site}
              </h5>
              <p className="text-gray-700 text-base mb-12 md:mb-8 h-[100px]">
                {sertif[idxSelectedSertif].description}
              </p>
              <div className="wrapper flex">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 my-bg-main text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg 0focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mr-2"
                >
                  <a href={sertif[idxSelectedSertif].url}>See Full Certificate </a>
                </button>

                <button 
                type="button"
                className="px-6 py-2.5 my-bg-ligh font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg 0focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  <a href={sertif[idxSelectedSertif].code} className="btn my-main">
                    Download My Certificate
                  </a>
                  <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="inline-flex flex-col" role="toolbar">
          {sertif.map((value, index) => {
            return (
              <button
                type="button"
                className="button rounded-full inline-block px-6 py-2.5 my-2 mx-2 my-light my-fs-15 transition duration-150 ease-in-out"
                key={index}
                onClick={() => onChangeSertif(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
