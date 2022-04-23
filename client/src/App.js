import React, { useEffect, useRef } from 'react'
import {Routes, Route} from 'react-router-dom'
import { gsap } from "gsap";

import Header from './components/headchunks'

import ProjectList from './routes/projects'
import SkillsPage from './routes/skills'
import ResumePage from './routes/resume'
import AboutPage from './routes/about'

import * as dat from 'dat.gui'

function App() {

  

  return (

      <div>
        

        <Header />

  
        <Routes>
          <Route path='/' exact element={<ProjectList />}/>
          <Route path='/projects' exact element={<ProjectList />}/>
          <Route path='/skills' exact element={<SkillsPage />}/>
          <Route path='/resume' exact element={<ResumePage />}/>
          <Route path='/about' exact element={<AboutPage />}/>

          
        </Routes>
        


      </div>

    
    
  );
}

export default App;
