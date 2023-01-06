import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Project from './components/Projects'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} basename={process.env.PUBLIC_URL}>
          <Route index element={<Home />} basename={process.env.PUBLIC_URL}/>
          <Route path="about" element={<About />} basename={process.env.PUBLIC_URL}/>
          <Route path="/contact" element={<Contact />} basename={process.env.PUBLIC_URL}/>
          <Route path="/project" element={<Project />} basename={process.env.PUBLIC_URL}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
