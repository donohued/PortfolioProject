import './project.css'

import Blurb from '../../pageblurb'
import Tile from './project_tile'

export default function projects() {
  const blurbbtns = {
    class: "git",
    link: "weeeeeee"
  }
  
  return (
    <>
      
      <Blurb title="Projects" blurb="Get a look at the projects i've worked on and things i've created!" btns={blurbbtns}/>
    


      <div id='content-wrapper' >
        <Tile />
        <ul>
          <li>Assisted Draft Client</li>
          <li>Python Web Archive Downloader</li>
          <li>Misc Unity Games</li>
          <li>The DRAWing Board</li>
          <li>C++ WAR card game</li>
          <li>Minecraft Mods</li>
          <li>This site :)</li>
        </ul>
      </div>
      
      
    </>
  )
}
