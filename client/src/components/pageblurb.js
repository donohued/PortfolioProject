import React, { Component } from 'react'
import './blurbs.css'

export default class pageblurb extends Component {
  render() {
    return (
      <>
      <div id='blurb-wrapper'>
        <div id='header-blurb'>
            <div className="page-blurb-wrapper">
              <h1>{this.props.title}</h1>
              <p>{this.props.blurb}</p>
              <ul className='header-box-grid projects'>
                <div className='header-box'></div>
                <div className='header-box'></div>
                <div className='header-box'></div>
              </ul>
            </div>
        </div>
        
      </div>
    
    </>
    )
  }
}

