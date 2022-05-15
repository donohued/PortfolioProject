import React, { useEffect, useRef } from 'react'
import {Routes, Route} from 'react-router-dom'
import { gsap } from "gsap";

import Header from '../Header/headchunks'

import ProjectList from '../Pages/Projects/projects'
import SkillsPage from '../Pages/Skills/skills'
import ResumePage from '../Pages/Resume/resume'
import AboutPage from '../Pages/About/about'

import './App.css'
import * as dat from 'dat.gui'

function App() {

  //L8R Tasks: 
  //Reduce resizing of canvas calls
  //make it better for siknny screens

  return (

      <>
        

        <Header />

  
        <Routes>
          <Route path='/' exact element={<ProjectList />}/>
          <Route path='/projects' exact element={<ProjectList />}/>
          <Route path='/skills' exact element={<SkillsPage />}/>
          <Route path='/resume' exact element={<ResumePage />}/>
          <Route path='/about' exact element={<AboutPage />}/>

          
        </Routes>

        
        


      </>

    
    
  );
}

export default App;
