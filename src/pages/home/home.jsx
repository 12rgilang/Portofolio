import "./../home/home.css";
import logo1 from "./../home/business.png";
import self from "./../home/myself.jpeg";
import "./../home/animateText.css";
import Aos from "aos";
import { useEffect } from "react";
import Ticker from "./../ticker/ticker";
import Email from "../../components/email/email";
import Jumbotron from "../../components/jumbotron/jumbotron";


let Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <>
      {/* Jumbotron */}
      <Jumbotron />

      {/* ticker */}
      <div className="mt-5 h-screen wave">
        <div className="word flex justify-center items-center border-black text-9xl my-dark"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center">
          MERN
        </div>
        <hr className=" border-2 border-black"/>
        <div className="middle flex justify-center items-center w-screen">
          <Ticker />
        </div>
        
      </div>
      
      {/* pitch */}
      <div className="main-pitch grid-cols-2 md:mt-[80px] sm:flex lg:justify-center lg:items-center h-screen">

        {/* left */}
        <div
          className="icon flex justify-center sm:basis-1/2 md:basis-1/2"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="30"
          data-aos-offset="0"
        >
          <img src={logo1} alt="Bussiness" className="hvr-pulse-grow " />
        </div>

        {/* right */}
        <div data-aos="fade-zoom-in">
          <div className="right text-center h-auto w-fit sm:flex sm:items-center sm:text-center sm:basis-1/2 md:basis-1/2 lg:flex lg:justify-center lg:items-center">
            <div class="p-6 md:p-12 text-center md:text-left rounded-md">
              <div className="flex justify-center">
                <div className="max-w-3xl">
                  <div className="block p-6 rounded-lg shadow-lg my-bg-light m-4">
                    <div className="md:flex md:flex-row">
                      <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                        <img
                          src={self}
                          className="rounded-full shadow-md"
                          alt="Gilang Avatar"
                        />
                      </div>
                      <div className="md:ml-6 ">
                        <p className="text-gray-500 text-justify font-light mb-6">
                        Strong web development skills are essential in today's digital landscape. As businesses increasingly rely on technology, my proficiency in web development can help expand opportunities and drive success. Please review my resume to see how my qualifications can benefit your organization.
                        </p>
                        <div className="md:flex items-center ml-5">
                        <p className="font-semibold text-xl mb-2 text-gray-800">
                          Gilang Ramadhan
                        </p>
                        <button className="resume font-semibold mb-0 px-3 py-2 rounded-lg shadow-lg hover:bg-slate-700 ">
                         <a href="https://drive.google.com/file/d/1mjRbo1h2FuysFGmdssFAo0yYaMZfjoeC/view?usp=share_link">
                         Check my Resume
                         </a> 
                        </button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="email mx-[50px] mt-[400px] mb-[100px] md:mb-[50px] md:my-[70px] md:flex items-center h-screen ">
        <div className="left basis-1/2"
        data-aos="fade-down">
          <div className="text-5xl font-bold text-center md:text-left md:pl-[50px] lwt leading-relaxed mb-5 w-fit ">Let's work Together</div>
          <div className="text-center ">I'm a web developer who is familiar with React.js. I have experience creating reusable components, responsive and interesting user interfaces, and utilizing leading-edge development tools. You can definitely depend on me to complete your project on schedule and within your projected budget thanks to my React.js expertise. Additionally, I'm an excellent team player and a quick learner. I would love to discuss your project in greater detail and learn more about your requirements.</div>
        </div>
        <div className="right pt-12 basis-1/2 md:flex md:pl-[100px] "
        data-aos="fade-up"
        >
          <Email />
        </div>
      </div>


    </>
  );
};

export default Home;
