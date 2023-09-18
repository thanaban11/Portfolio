import React from "react";
import "./Profile.css";
import {TypeAnimation} from 'react-type-animation';
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="colz-icon">

            <a href="https://www.facebook.com/Extra10416/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com/">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/?hl=th">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/i/flow/login">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Thanaban Dokbua</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <TypeAnimation
                  sequence={[
                    "I'm a Junior Developer",
                    1000,
                    "I'm an Electrical Engineering",
                    1000,
                    
                  ]}
                  speed={50}
                  repeat={Infinity}
                  style={{ fontSize: "1em" }}
                />
              </h1>
              <span className="profile-role-tagline"> 
                  Thanaban Dokbua 6340204848
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn" style={{marginRight: '8px'}}>
              {" "}
              Hire Me{" "}
            </button>
            <a href="Serume.Thanaban.pdf" download="Serume.Thanaban.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
