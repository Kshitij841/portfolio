import Loader from 'react-loaders'
import './index.scss'

const Project = () => {
  return (
    <>
      <div className="main-container">
                <div className='heading'>Projects 💡</div>
                <div className='heading-line'>Things I have worked on past few years: </div>
                <div className='projectss'>
                  <div className='project-7'>
                    <h1>A Star Path Finding Algorithm Visualiser</h1>
                    <p>A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.
                      A simple algorithm build in python using PyGame library to help visualise the A star path finding algorithm.
                    </p>
                    <a href='https://github.com/Kshitij841/Python-A-star-Path-Finding/blob/main/a-star.py' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                  <div className='project-6'>
                    <h1>URL Shortner</h1>
                    <p>A basic URL-Shortner running on an Express Server with Mongoose as it's database and ejs to amalgamate front end 
                      and back end of the site. The URL text field takes in a string and with the help of shortID module.
                    </p>
                    <a href='https://github.com/Kshitij841/url-shortner' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                  <div className='project-5'>
                    <h1>Speech Recognition</h1>
                    <p>Speech Recognition program which works by using Google's speech recognition API and stores the converted speech 
                      into a json file with timestamps in text format.
                    </p>
                    <a href='https://github.com/Kshitij841/Speech-Recognition-Py/blob/main/speech-rec.py' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                  <div className='project-4'>
                    <h1>Planet Simulation</h1>
                    <p>Planet Simulation build in Python with the help of PyGame library. This program uses actual astronomical values
                      of the planets like mass, velocity and gravitational pull produced by the sun towards other planets.
                    </p>
                    <a href='https://github.com/Kshitij841/planet-sim-py/blob/main/planet-sim.py' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                  <div className='project-3'>
                    <h1>Hand Tracking Mouse</h1>
                    <p>Python based program that helps in controlling mouse using pyautogui and win32api with the help of previously built
                      Python Hand Tracking module. 
                    </p>
                    <a href='https://github.com/Kshitij841/hand-tracking-mouse/blob/main/virtual_mouse.py' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                  <div className='project-2'>
                    <h1>Hand Controlling Volume</h1>
                    <p>Python based program that helps in controlling volume using pycaw and numpy with the help of previously built Python Hand Tracking module. 
                    </p>
                    <a href='https://github.com/Kshitij841/Volume-Hand-Tracking/blob/main/volume_hand_tracking.py' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                  <div className='project-1'>
                    <h1>Hand Tracking</h1>
                    <p>Python based program that helps in tracking hand using mediapipe by Google and opencv. Minimal coded program and a module which could be further imported and used in other projects was made.
                    </p>
                    <a href='https://github.com/Kshitij841/hand-tracking-mouse/blob/main/virtual_mouse.py' target="_blank" rel="noreferrer" className="flat-button">
                    <span>View Project</span>
                    </a>
                  </div>
                </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Project