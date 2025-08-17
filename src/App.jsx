import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import anzo from './assets/anzo.avif'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import 'flowbite';
import ProjectsCarousel from './components/ProjectsCarousel'
import Page5 from './pages/Page5'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='main'>
        <Header/>
        <Page1 />
        <Page2/>
        <Page3 />
        <ProjectsCarousel />
        <Page5/>
      </div>
    </>
  )
}

export default App
