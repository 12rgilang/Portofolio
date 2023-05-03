import bg from './blobanimation.svg'
import person from './person-planning-a-startup-business.png'
import './jumbotron.css'
import Aos from "aos";

function Jumbotron(){
    return(
        <>
        <div className="parent md:flex h-screen w-auto background-svg px-[73px] justify-center items-center ">
            <div className=" basis-1/2 h-auto sm:flex sm:items-center sm:text-center sm:basis-1/2">
                <div className="text sm:ml-5 "
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="30"
                data-aos-offset="0">
                    <div className='font-semibold flex justify-start items-center my-5'>Innovative | Adaptive </div>
                    <div className='text-5xl font-bold text-left leading-relaxed'>Meet Your New Favorite Web Dev.</div>
                    <div className='flex justify-start items-center'>Gilang Ramadhan</div>
                </div>
            </div>
            <div className="right basis-1/2 sm:flex"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
                <img src={person} alt='Planning Startup' />
            </div>
        </div>
        </>
    )
}

export default Jumbotron;