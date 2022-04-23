import './head.css'
import { Link } from "react-router-dom";

import Canvas from './canvas';
import SecretPage from '..//routes/secretpage'

import PropTypes from 'prop-types'

const Header = (props) => {

  const draw = (ctx, frameCount) => {

    const wave = {
      y: ctx.canvas.height*0.8,
      length: 0.010,
      amplitude: 20,
      frequency: frameCount/234
    }

    const wave2 = {
      y: ctx.canvas.height/2,
      length: 0.02,
      amplitude: 1.5,
      frequency: frameCount/895
    }

    const wave3 = {
      y: ctx.canvas.height/2,
      length: 0.02,
      amplitude: 20,
      frequency: frameCount/345
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#f8dbff'
    ctx.beginPath()

    ctx.moveTo(0, ctx.canvas.height)
      for(let i = 0; i < ctx.canvas.width; i++){
        ctx.lineTo(i,
          wave.y + 
          (
            Math.sin(i * wave.length + wave.frequency / (i + 100)) * wave.amplitude)
           * (Math.sin(i/3 * wave2.length + wave2.frequency) * wave2.amplitude)
           + (Math.cos(i/2 * wave3.length + wave3.frequency) * wave3.amplitude)
           + (Math.cos(i/2 * wave3.length + wave3.frequency) * (wave3.amplitude*2))/3
           )
      }

    ctx.lineTo(ctx.canvas.width, ctx.canvas.height)
    ctx.stroke()
    //ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  return (
    <>
    <Canvas draw={draw}/>

    <div id='header-bg'>
        <div id='top'>
          <h1 id='header-title'><Link to='/'>Donohue Labs</Link></h1>
          <span className='nav-container'>
            <ul className='nav'>
              <li className="nav-item" >
                <Link className="navlink" to='/projects'>Projects</Link> 
              </li>
              <li className="nav-item">
                <Link className="navlink" to='/skills'> Skills</Link> 
              </li>
              <li className="nav-item">
                <Link className="navlink" to='/resume'> Resume</Link> 
              </li>
              <li className="nav-item">
                <Link className="navlink" to='/about'> About</Link>
              </li>
            </ul>
          </span>
            
        </div>
      </div>

    </>
    
  )
}

export default Header
