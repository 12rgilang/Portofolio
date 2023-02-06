import logo from "./new-icon.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import "./../navbar/navbar.css";

let Navbar = () => {
  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // {name: <FaGithub /> , link: "https://github.com/12rgilang"},
  // {name: <FaLinkedinIn /> , link: "https://www.linkedin.com/in/gilang-ramadhan-fullstackdev2022"},
  // {name: <FaInstagramSquare /> , link: "https://www.instagram.com/12rgilang/"},
  // {name: <FaTwitterSquare /> , link: "https://twitter.com/G_R12/status/1574050538693758976"},

  let Links = [
    { name: "Home", link: "/home" },
    { name: "About Me", link: "/story" },
    { name: "Portofolio", link: "/porto" },
  ];

  return (
    <>
      {location.pathname === "/" ? null : (
        <div className="navbar flex items-center h-20 w-auto ">
          <div className="left basis-1/2">
            <div className="logo flex items-center pl-3 ml-5 sm:justify-start sm:flex ">
              <a href={Links[0].link}>
                {" "}
                <img
                  src={logo}
                  alt="Logo"
                  className="w-15 h-10 sm:w-15 sm:h-20"
                  data-aos="zoom-out-right"
                />
              </a>
            </div>
          </div>
          {/* <div
            className="middle my-dark flex basis-1/2 justify-center items-center"
            data-aos="zoom-out-down"
          >
            <div className="text hidden sm:flex sm:justify-center sm:basis-1/2 sm:text-xl"></div>
            <div className="flex flex-nowrap my-bg-salmon sm:hidden">GILANG RAMADHAN</div>
          </div> */}

          {/* link */}
          <div
            className="right flex items-center justify-end cursor-pointer basis-1/2 pr-2 lg:flex"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="30"
            data-aos-offset="0"
          >
            <div className="wrapper flex-col lg:flex font-medium">
              <ul className="hidden sm:flex md:flex lg:flex items-center cursor-pointer">
                {Links.map((value) => {
                  return (
                    <li key={value.name} className="px-2 my-dark hover:underline focus:underline focus:shadow-lg mr-5 ">
                      <a href={value.link}> {value.name}</a>
                    </li>
                  );
                })}
              </ul>
              </div>
            </div>

              {/* dropdown */}
              {/* <div className="relative">
                <button
                  className="flex my-bg-secondary items-center px-3 py-2 rounded my-dark sm:hidden"
                  onClick={toggleMenu} // Add an event handler to toggle the value of "isOpen"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button> */}
              {/* <div
                  className={`absolute top-0 right-0 left-auto flex group-focus:block group-focus:opacity-100 transition-opacity duration-150 ease-in-out mt-8 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="relative w-full my-bg-secondary flex ">
                    <div className="flex py-2 px-4 font-semibold my-dark">
                      <div className="my-bg-secondary mr-3 px-4 py-2 ">
                        {Links.map((value) => {
                          return (
                            <div
                              key={value.name}
                              className="hover:opacity-75 focus:opacity-75"
                            >
                              <a href={value.link}>{value.name}</a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <button
                    className="absolute top-0 right-0 pt-4 mr-4 my-dark"
                    onClick={toggleMenu} // Add an event handler to toggle the value of "isOpen"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div> */}
              {/* </div> */}
            
            <div className="dropdown">
            <button
            className="inline-block sm:hidden px-4 py-2.5 my-bg-dark text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="30"
            data-aos-offset="0"
          >
             <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
          </button>

          <div
            className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full my-bg-light bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-fit h-screen"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header flex items-center justify-between p-4 z-10">
              <h5
                className="offcanvas-title mb-0 leading-normal font-semibold"
                id="offcanvasRightLabel"
              >
                {Links.map((value) => {
                  return (
                    <div
                      key={value.name}
                      className="hover:opacity-75 focus:opacity-75 my-2 hover:underline focus:underline" 
                    >
                      <a href={value.link}>{value.name}</a>
                    </div>
                  );
                })}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
            </div>
          </div>
            </div>    
        </div>
      )}
    </>
  );
};

export default Navbar;
