import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <div className='bg-[#161513]'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
