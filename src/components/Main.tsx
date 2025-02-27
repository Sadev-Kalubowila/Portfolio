import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://raw.githubusercontent.com/Sadev-Kalubowila/Portfolio/refs/heads/main/src/assets/images/profile/profile_avater.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Sadev-Kalubowila" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sadev-kalubowila/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sadev Kalubowila</h1>
          <p>Senior XR|VR Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Sadev-Kalubowila" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sadev-kalubowila/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;