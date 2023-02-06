import "tw-elements";
import image2 from "./../supports/carousel/carousel2.jpeg";
import image3 from "./../supports/carousel/carousel3.jpeg";
import me from "./me.jpeg";
import "./../story/story.css";


function Story() {
  return (
    <>
      <div className="main-container-story md:flex md:items-center h-screen">
        {/* left */}
        <div className="left about-me basis-1/2 flex justify-center items-center ">
          <div className="image-container rounded-lg shadow-lg md:ml-[100px] mt-5 flex" data-aos="zoom-in-up">
            <img src={me} alt="me" />
          </div>
        </div>

        {/* Right */}
        <div className="right basis-1/2 md:flex md:justify-center md:items-center" data-aos="zoom-in-down">
          {/* <Quote /> */}
          <p className="mt-5 mx-4 text-center my-light md:pr-[100px] md:text-left ">
            As a father of one beautiful daughter and a former aircraft
            mechanic, I recently graduated from{" "}
            <strong className="font-bold text-xl pwt">
              Purwadhika's Tech School
            </strong>{" "}
            bootcamp, where I honed my skills in web development. I have a
            passion for creating and designing, and I find inspiration in the
            everyday details of life, as well as in my love for watching
            Manchester United. With my unique background and new found skills, I
            am excited to bring my talents to the digital world and create
            innovative and visually appealing projects.
          </p>
        </div>
      </div>


      {/* stats */}
      <div className="stats h-auto">
        <section className="my-dark text-center lg:text-left ">
          <div className="block rounded-lg shadow-lg my-bg-light h-auto">
            <div className="flex flex-wrap items-center md:">
              <div className="grow-0 shrink-0 basis-auto w-full mt-2 lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12" >
                  <h2 className="text-3xl font-bold mb-4 text-blue-600 display-5 aboutme-experience"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom">
                    <p>As an aircraft technician, my responsibilities included:</p> 
                    <button
                      className="inline-block px-6 py-2.5 my-light font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#experience"
                      aria-expanded="false"
                      aria-controls="experience"
                    >
                      CLick here!
                    </button>
                  </h2>
                  <div className="collapse" id="experience">
                    <div className="block p-6 rounded-lg shadow-lg bg-white ">
                      <p className="my-dark mb-1 ">
                        - Maintaining and repairing the electrical and mechanical
                        systems on aircraft.
                      </p>
                      <p className="my-dark my-3">
                        - Ensuring that the aircraft is in good condition for
                        operation.
                      </p>
                      <p className="my-dark mb-2">
                        - Conducting regular inspections, maintenance and checks
                        on mechanical parts of the aircraft such as engines,
                        etc.
                      </p>
                      <p className="my-dark mb-1">
                        - Keeping records of repairs, maintenance, and checks
                        performed on the aircraft as data on its condition under
                        supervised of an Engineer.
                      </p>
                      <p className="my-dark my-3">
                        - Documenting all maintenance carried out as a form of
                        preventive and corrective measures for the aircraft.
                      </p>
                      <p className="my-dark mb-1">
                        - Determining the airworthiness of the aircraft before it
                        is used or operated fully for various purposes and
                        reported to Engineer.
                      </p>
                    </div>
                  </div>

                  <div className="grid lg:gap-x-12 md:grid-cols-3 mt-5">
                    <div className="mb-12 md:mb-0"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      <h2 className="text-3xl font-bold my-dark mb-4">
                        7 Years
                      </h2>
                      <h5 className="text-lg font-medium text-blue-500 mb-0">
                        Working On the field
                      </h5>
                    </div>

                    <div className="mb-12 md:mb-0"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      <h2 className="text-3xl font-bold text-blue-600 mb-4">
                        Dozens Trip
                      </h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">
                        Working overseas
                      </h5>
                    </div>
                    <div className="mb-12 md:mb-0" 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      <h2 className="text-3xl font-bold my-dark mb-4">
                        Millions
                      </h2>
                      <h5 className="text-lg font-medium text-blue-500 mb-0">
                        Valueable lessons
                      </h5>
                    </div>
                  </div>
                </div>
              </div>



              <div className="block w-full mb-5 px-5 lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                <img
                  src={image2}
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-xl float-right"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center  ">
              <div className="block w-full px-5 lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12 ">
                <img
                  src={image3}
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-xl float-left"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                />
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-3xl font-bold mb-4 text-blue-600 display-5 aboutme-bootcamp"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom">
                    <p> Bootcamp at Purwadhika Technology School</p> 
                    <button
                      className="inline-block px-6 py-2.5 my-light font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#bootcamp"
                      aria-expanded="false"
                      aria-controls="bootcamp"
                    >
                      What did i learn ?
                    </button>
                  </h2>
                  <div className="collapse" id="bootcamp">
                  <div className="block p-6 rounded-lg shadow-lg bg-white ">
                    <p className="my-dark mb-1 "> 
                      - JavaScript Fundamental | variable and datatypes | conditional and loop statements|array and function|OOP|Data Structures| basic Algorithm
                    </p>
                    <p className="my-dark my-3 "> 
                      - Front-End | HTML CSS | React JS | React Hooks| CSS Framework| network call and validation| basic state managements redux| firebase| intro NEXT Js
                    </p>
                    <p className="my-dark mb-1 "> 
                      - Back-End | Node Js | Express | REST API | My SQL | ORM Sequelize | Authentication and Authorization | intro Docker
                    </p>
                  </div>
                  </div>
                  <div className="grid lg:gap-x-12 md:grid-cols-3 pt-5">
                    <div className="mb-12 md:mb-0"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      <h2 className="text-3xl font-bold text-blue-600 mb-4">
                        480
                      </h2>
                      <h5 className="text-lg font-medium my-dark mb-0">
                        Hours of Intensive Coding sessions
                      </h5>
                    </div>
                    <div className="mb-12 md:mb-0"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      <h2 className="text-3xl font-bold my-dark mb-4">
                        2 Months
                      </h2>
                      <h5 className="text-lg font-medium text-blue-600 mb-0">
                        Final Project Bootcamp
                      </h5>
                    </div>

                    <div className="mb-12 md:mb-0"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                      <h2 className="text-3xl font-bold text-blue-600 mb-4">
                        Infinite
                      </h2>
                      <h5 className="text-lg font-medium my-dark mb-0">
                        Place to Develop
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="mb-[100px] md:mb-[100px]" />

      {/* football */}
      {/* <div className="football">
        <iframe
          src="//gifs.com/embed/wayne-rooney-bicycle-kick-goal-vs-manchester-city-multiview-Lgpvow"
          frameborder="0"
          scrolling="no"
          className="rooney"
          alt="rooney bicyclekick"
        />
      </div> */}
    </>
  );
}

export default Story;
