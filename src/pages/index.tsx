import { type NextPage } from "next";
import Background from '../../public/assets/IMG_2035.JPG'
import Profile from '../../public/assets/profile.jpeg'
import Image from "next/image";

const Home: NextPage = () => {
  
  return (
    <>
    <div 
      style={{ backgroundImage: `url(${ Background.src })` }}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed h-screen shadow-2xl'
      >
        <div className='flex flex-col justify-center align-middle place-items-center text-white bg-black w-screen bg-opacity-30 rounded'>
        <p className="font-italic lead"><i className="far fa-envelope p-1"></i><a href="mailto:apolbrandon@gmail.com"> apolbrandon@gmail.com</a>
         | <i className="fas fa-phone p-1"></i> (937)380-8954 | 
         <i className="fab fa-github p-1"></i> <a href="https://github.com/brandonapol">github.com/brandonapol</a> | 
         <i className="fab fa-linkedin-in p-1"></i><a href="https://www.linkedin.com/in/brandonapol/"> Brandon Apol</a></p>
            <h1 className="text-4xl font-bold p-5">
              BRANDON APOL
            </h1>
            <p className="font-italic lead"><i className="fas fa-map-marker-alt"></i> Fairbanks, Alaska</p>
            <p className="font-italic lead">Educator, Learner, Programmer, Musician</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full py-8 text-center">
          <svg className="animate-bounce w-6 h-6 mx-auto mt-4" fill="none" viewBox="0 0 24 24" stroke="rgb(156 163 175)">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
    </div>
    <div className="bg-timberwolf pt-5 h-screen">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center">
            <div className="md:order-2">
              <div className="shadow-lg">
                  <img src={ Profile.src } alt="Profile picture" className="rounded-xl"/>
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hi, I'm Brandon.
              </h2>
              <p className="mt-4 text-gray-600">
                I'm a web developer from Alaska. Sometimes I live in Seattle or Ohio. 
                I specialize in building responsive and scalable web applications using modern web technologies.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-base font-medium text-cadet bg-slate-900 p-3 rounded transition duration-250 hover:border-black hover:bg-slate-200 hover:text-black"
                >
                  Read my blog &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>

    </>
  );
}

export default Home
