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
            and a quick learner
          </p>
        </div>
      </div>

      <div className='loader'>
        <span></span>
      </div>

      <div className='spinning-cyl'>
        <span style={{ "--a": 1 }}><i>P</i>ytho<i>n</i></span>
        <span style={{ "--a": 2 }}><i>S</i>alesforc<i>e</i></span>
        <span style={{ "--a": 3 }}><i>C</i>opad<i>o</i></span>
        <span style={{ "--a": 4 }}><i>H</i>tm<i>L</i></span>
        <span style={{ "--a": 5 }}><i>C</i>S<i>S</i></span>
        <span style={{ "--a": 6 }}><i>S</i>Q<i>L</i></span>
        <span style={{ "--a": 7 }}><i>J</i>avaScrip<i>t</i></span>
        <span style={{ "--a": 8 }}><i>R</i>eactJ<i>S</i></span>
        <span style={{ "--a": 9 }}><i>B</i>lende<i>r</i></span>
        <span style={{ "--a": 10 }}><i>W</i>indow<i>s</i></span>
        <span style={{ "--a": 11 }}><i>L</i>inu<i>x</i></span>
        <span style={{ "--a": 12 }}><i>M</i>Soffic<i>e</i></span>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
