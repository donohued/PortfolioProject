import React, { Component } from 'react'

export default class project_tile extends Component {
  render() {
    return (
      <>
        <div className='project-tile-wrapper'>
            <div className='project-tile-thumbnail'></div>
            <div className='project-tile-info'>

                <div className='project-tile-header'>
                    ADC
                </div><br />
                <div className='project-tile-short-desc'>
                    A multi user game draft webapp
                </div><br />

                <div className='project-tile-madewith'>

                  <div>
                    Made using
                  </div>
                  

                  <div className='project-resource-box'>
                    react
                  </div>
                  <div className='project-resource-box'>
                    node
                  </div>

                </div>
            </div>
            
        </div>
      </>
    )
  }
}
