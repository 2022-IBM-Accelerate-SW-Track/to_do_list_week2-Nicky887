import React, { Component } from 'react';
import "./About.css";
import nicole_pic from '../assets/nicole_pic.jpg';

  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
             src = {nicole_pic}
             alt="Profile Pic"
            
              
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Nicole Ani</div>
            <div className="brief_description">
               I am Nicole Ani. I'm a rising junior in the University of Massachusetts Amherst. I enjoy traveling, reading and creating fashion and lifestyle content.
            </div>
          </div>
        </div>
      </div>
</p> 
      </div>
    )
  }
}