import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
           I am skilled in Python, SQL, C++/C, CSS, HTML, JavaScript, ReactJS, Blender, Copado and Salesforce.
           Currently pursuing Bachelor of Technology - B.Tech focused in Information Technology 
           from Maharaja Surajmal Institute Of Technology(GGSIPU), Janakpuri, New Delhi.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be tech saavy,
            avid music listener, Formula 1 fan(but here comes Sebastian Vettel!)
            and a quick learner.
          </p>
          <a href='https://drive.google.com/file/d/15d9gHWi_8f729CjSfwcJvN8iOI800BMu/view?usp=sharing' target="_blank" rel="noreferrer" className="flat-button">
            <span>View Resume</span>
          </a>
        </div>
      </div>
      <div className='cube1'>
        <div className='top1'></div>
        <div>
          <span style={{ "--i": 0 }}><h2>Python</h2><h2>Python</h2></span>
          <span style={{ "--i": 1 }}><h2>Salesforce</h2><h2>Salesforce</h2></span>
          <span style={{ "--i": 2 }}><h2>ReactJS</h2><h2>ReactJS</h2></span>
          <span style={{ "--i": 3 }}><h2>C++</h2><h2>C++</h2></span>
        </div> 
      </div>
      <div className='cube2'>
        <div className='top2'></div>
        <div>
          <span style={{ "--j": 0 }}><h3>SQL</h3><h3>SQL</h3></span>
          <span style={{ "--j": 1 }}><h3>HTML</h3><h3>HTML</h3></span>
          <span style={{ "--j": 2 }}><h3>CSS</h3><h3>CSS</h3></span>
          <span style={{ "--j": 3 }}><h3>JS</h3><h3>JS</h3></span>
        </div> 
      </div>
      <div className='cube3'>
        <div className='top3'></div>
        <div>
          <span style={{ "--k": 0 }}><h3>/</h3><h3>/</h3></span>
          <span style={{ "--k": 1 }}><h3>/</h3><h3>/</h3></span>
          <span style={{ "--k": 2 }}><h3>/</h3><h3>/</h3></span>
          <span style={{ "--k": 3 }}><h3>/</h3><h3>/</h3></span>
        </div> 
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About