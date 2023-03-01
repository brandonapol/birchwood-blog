import { type NextPage } from "next";
import Background from '../../public/assets/IMG_2035.JPG'
import Climbing from '../../public/assets/IMG_2328.JPG'
import Profile from '../../public/assets/profile.jpeg'
import Boats from '../../public/assets/IMG_0570.jpeg'
import Cabin from '../../public/assets/IMG_1843.jpeg'

const Home: NextPage = () => {
  
  return (
    <>
    <section 
      style={{ backgroundImage: `url(${ Background.src })` }}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed h-screen shadow-2xl'
      >
        <div className='flex flex-col justify-center align-middle place-items-center text-white bg-black w-screen bg-opacity-30 rounded'>
          <div className="font-italic lead flex flex-row sm:hidden md:flex">
            <div className="hover:text-cadet transition duration-250">
              <i className="far fa-envelope p-1"></i><a href="mailto:apolbrandon@gmail.com"> apolbrandon@gmail.com |</a>
            </div>
            <div className="hover:text-cadet transition duration-250">
            <i className="fas fa-phone p-1"></i> (937)380-8954 | 
            </div>
            <div className="hover:text-cadet transition duration-250">
            <i className="fab fa-github p-1"></i> <a href="https://github.com/brandonapol">github.com/brandonapol</a> |
            </div>
            <div className="hover:text-cadet transition duration-250">
            <i className="fab fa-linkedin-in p-1"></i><a href="https://www.linkedin.com/in/brandonapol/"> Brandon Apol</a>
            </div>
          </div>
          <div className="sm:flex sm:flex-row md:hidden">
            <a href="mailto:apolbrandon@gmail.com"><i className="far fa-envelope p-1 hover:text-cadet transition duration-250"></i></a>
            <a href="https://github.com/brandonapol"><i className="fab fa-github p-1 hover:text-cadet transition duration-250"></i></a>
            <a href="https://www.linkedin.com/in/brandonapol/"><i className="fab fa-linkedin-in p-1 hover:text-cadet transition duration-250"></i></a>
          </div>
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
    </section>
    <section className="bg-timberwolf pt-5 md:h-screen sm:h-auto">
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
    </section>
    <section
      style={{ backgroundImage: `url(${ Climbing.src })` }}
      className='bg-cover bg-fixed h-56 shadow-2xl'>
        
      </section>
    <section className="bg-cadet pt-5  justify-center align-middle place-items-center">
      <div className="flex flex-col container mx-auto py-12 px-4 sm:px-6 lg:px-8 justify-center align-middle place-items-center">
        <div className="p-5 border-b-2 border-rose">
          <h2 className="text-3xl font-bold">SKILLS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-4 text-center">
          <div className="p-5">
            <div className="text-4xl text-rose p-2 mb-3">
              <i className="fas fa-desktop"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Web design</h4>
            <p className="text-gray-700">HTML, CSS, JavaScript, React, Vue, Next.js, Tailwind CSS, Bootstrap, Redux, Vitest, TypeScript with style!</p>
          </div>
          <div className="p-5">
            <div className="text-4xl text-rose p-2 mb-3">
              <i className="fas fa-server"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Back End</h4>
            <p className="text-gray-700">Python, Flask, Express, Node, Django, FastAPI</p>
          </div>
          <div className="p-5">
            <div className="text-4xl text-rose p-2 mb-3">
              <i className="fas fa-terminal"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">DevOps</h4>
            <p className="text-gray-700">AWS CCP, Docker, Git, ECS, EC2, S3, DigitalOcean, Heroku, GitHub Actions, Linode, Bash</p>
          </div>
          <div className="p-5">
            <div className="text-4xl text-rose p-2 mb-3">
              <i className="fas fa-school"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Teaching</h4>
            <p className="text-gray-700">Curriculum Development, Content Creation, Class Instruction, Planning and Leadership Skills</p>
          </div>
          <div className="p-5">
            <div className="text-4xl text-rose p-2 mb-3">
              <i className="fas fa-database"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Data</h4>
            <p className="text-gray-700">SQL, Pandas and Numpy for Python, R, Regex, ORMs, MongoDB, Tableau, Data Visualization</p>
          </div>
          <div className="p-5">
            <div className="text-4xl text-rose p-2 mb-3">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Creative thinker</h4>
            <p className="text-gray-700">Background in music, education, customer service, outdoorsmanship, youth development, more than just a developer</p>
          </div>
      </div>
      </div>
    </section>
    <section
      style={{ backgroundImage: `url(${ Boats.src })` }}
      className='bg-cover bg-fixed h-56 shadow-2xl'>
        
    </section>
    <section className="bg-linen py-5  justify-center align-middle place-items-center">
      <div className="flex flex-col container mx-auto py-6 px-4 sm:px-6 lg:px-8 justify-center align-middle place-items-center">
        <header className="text-center mb-5">
          <h2 className="text-3xl p-3 text-rose border-b-2 border-rose">Highlighted Work</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
             <div className="flex"><a href="https://github.com/brandonapol/" className="text-rose transition duration-200 hover:text-slate-200 hover:bg-slate-800 p-2"><i className="fab fa-github p-2 "></i>My Github</a></div>
            <p className="mb-4"><a href="https://github.com/brandonapol/recommendation-letter" className="text-rose transition duration-200 hover:text-slate-200 hover:bg-slate-800 p-2">Letter of Recommendation</a></p>
            <div>
              <img className="object-contain" src={ Cabin.src }/>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2"><a href="https://github.com/brandonapol/Final-Project-API-API" className="text-rose transition duration-200 hover:text-slate-200 hover:bg-slate-800 p-2">Flask App Generator</a></h4>
            <p className="text-gray-700 mb-4">This project was my response to observing that most Flask apps were basically identical, so I made a full stack app that zipped a template Flask app and downloaded it. It's saved me more time than I even thought it would.</p>
            <div className="my-6 border-b-2 border-gray-300"></div>
            <h4 className="text-lg font-bold mb-2"><a href="codingtemple.com/self-paced/" className="text-rose transition duration-200 hover:text-slate-200 hover:bg-slate-800 p-2">Coding Temple: Self-Paced Course</a></h4>
            <p className="text-gray-700 mb-4">Over the course of two months, I created and delivered a self-paced version of Coding Temple's full-time live bootcamp course, which delivered a return on investment of over 30:1. I tutored students in code for the following 7 months while building other projects for the company.</p>
            <div className="my-6 border-b-2 border-gray-300"></div>
            <h4 className="text-lg font-bold mb-2"><a href="#" className="text-rose transition duration-200 hover:text-slate-200 hover:bg-slate-800 p-2">Coding Temple: Self-Paced Data Course</a></h4>
            <p className="text-gray-700">In-process: Creating and delivering a brand-new Data Analysis self-paced course for Coding Temple. Learned new technologies and made educational content for each technology learned.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-eerie py-8 text-white sm:h-auto justify-center align-middle place-items-center">
        <div className="flex flex-col container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-5">
            <h2 className="text-3xl p-3 border-b-2 border-gray-600">Other Stuff About Me</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
            <iframe src="https://open.spotify.com/embed/album/2IoqqeZojxqSfJo4ll688L" width="100%" height="380" frameBorder="0" allow="encrypted-media" loading="lazy"></iframe>
            </div>
            <div>
              <p className="text-white">I have a lot of interests! I do a lot of stuff!</p>
              <br></br>
              <p className="text-white">I enjoy rock climbing, music theory, cross country skiing, spending time with my wife, learning about functional programming, swanky coffee, farming, mountaineering (and generally being on top of things), bicycling, ice fishing, church history, books by Dietrich Bonhoeffer, and more!</p>
              <br></br>
              <p className="text-white">I also was a music teacher and I still play music and teach for fun! On the left is an album I co-produced while I was in college, and I hope you give it a listen.</p>
            </div>
          </div>
        </div>

    </section>
    <section
      style={{ backgroundImage: `url(${ Background.src })` }}
      className='bg-cover bg-fixed h-56 shadow-2xl'>
        
    </section>
    <section>
    <div className="flex md:h-full p-5 pt-8 items-center sm:h-auto justify-center align-middle place-items-center bg-slate-800">
      <div className="container">
        <header className="text-center mb-5">
          <h2 className="text-white border-b-2 border-gray-600">Find Me</h2>
        </header>
        <div className="flex justify-center">
          <ul className="list-none m-0 p-0 flex">
            <li className="mx-2">
              <a href="https://www.facebook.com/bapol1/" className="inline-block p-4 rounded-full bg-slate-200 text-black hover:text-white hover:bg-slate-500 transition duration-200" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com/_BrandonApol" className="inline-block p-4 rounded-full bg-slate-200 text-black hover:text-white hover:bg-slate-500  transition duration-200" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://github.com/brandonapol" className="inline-block p-4 rounded-full bg-slate-200 text-black hover:text-white hover:bg-slate-500  transition duration-200" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.instagram.com/brandonapol/" className="inline-block p-4 rounded-full bg-slate-200 text-black hover:text-white hover:bg-slate-500  transition duration-200" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="mailto: brandonapol@cedarville.edu" className="inline-block p-4 rounded-full bg-slate-200 text-black hover:text-white hover:bg-slate-500  transition duration-200" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://calendly.com/brandonapol/30min" className="inline-block p-4 rounded-full bg-slate-200 text-black hover:text-white hover:bg-slate-500 transition duration-200" target="_blank" rel="noopener noreferrer">
                <i className="far fa-calendar-alt"></i>
              </a>
            </li>
          </ul>
        </div>
        <footer className="py-5 mt-5">
          <div className="text-center">
            <p className="italic text-gray-600">&copy; Brandon Apol</p>
          </div>
        </footer>
      </div>
    </div>

    </section>
    </>
  );
}

export default Home
