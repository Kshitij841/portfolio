import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <>
      <div className="Parent-Header">
            <div className="Main-Box">
                <div className="cursor"></div>
                <h1 className="Main-para">Hello!👋</h1>
                <h1 className="Main-para">My name is Kshitij Singh</h1>
                <h1 className="Main-para">I'm a Programmer</h1>
                <p className="Secondary-para">Python / Web Development / Salesforce / C++ / DBMS / Blender</p>
                <Link to="/contact" className="flat-button">
                  CONTACT ME
                </Link>
            </div>
            <div className="animation">
              <span style={{ "--i": 10 }}></span>
              <span style={{ "--i": 9 }}></span>
              <span style={{ "--i": 8 }}></span>
              <span style={{ "--i": 7 }}></span>
              <span style={{ "--i": 6 }}></span>
              <span style={{ "--i": 5 }}></span>
              <span style={{ "--i": 4 }}></span>
              <span style={{ "--i": 3 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 1 }}></span> 
            </div>
            <div className='Box'>
              <span style={{ "--z": 1 }}></span>
              <span style={{ "--z": 2 }}></span>
              <span style={{ "--z": 3 }}></span>
              <span style={{ "--z": 4 }}></span>
              <span style={{ "--z": 5 }}></span>
              <span style={{ "--z": 6 }}></span>
              <span style={{ "--z": 7 }}></span>
              <span style={{ "--z": 8 }}></span>
              <span style={{ "--z": 9 }}></span>
              <span style={{ "--z": 10 }}></span>
            </div>
        </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home