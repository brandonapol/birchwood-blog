import { type NextPage } from "next";
import Background from '../../public/assets/IMG_2035.JPG'
import Profile from '../../public/assets/profile.jpeg'

const Home: NextPage = () => {
  
  return (
    <>
    <div 
      style={{ backgroundImage: `url(${ Background.src })` }}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed h-screen shadow-2xl'
      >
        <div className='flex flex-col justify-center align-middle place-items-center text-white bg-black w-screen bg-opacity-30 rounded'>
        {/* <p className="font-italic lead"><i className="far fa-envelope p-1"></i><a href="mailto:apolbrandon@gmail.com"> apolbrandon@gmail.com</a>
         | <i className="fas fa-phone p-1"></i> (937)380-8954 | 
         <i className="fab fa-github p-1"></i> <a href="https://github.com/brandonapol">github.com/brandonapol</a> | 
         <i className="fab fa-linkedin-in p-1"></i><a href="https://www.linkedin.com/in/brandonapol/"> Brandon Apol</a></p> */}
         <div className="font-italic lead flex flex-row">
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
    <div className="bg-timberwolf pt-5 md:h-screen sm:h-auto">
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
    <div
      style={{ backgroundImage: `url(${ Background.src })` }}
      className='bg-cover bg-fixed h-56 shadow-2xl'>
        
      </div>
    <div className="bg-cadet pt-5 h-screen justify-center align-middle place-items-center">
      <div className="flex flex-col container mx-auto py-12 px-4 sm:px-6 lg:px-8 justify-center align-middle place-items-center">
        <div className="p-5 border-b-2 border-gray-600">
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
    </div>
    
    </>
  );
}

export default Home
