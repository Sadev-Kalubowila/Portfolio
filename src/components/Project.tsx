import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://drive.google.com/file/d/1GwLlF2PULSlqSd8uQUDLWd2mPeCgO2Or/view" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1GwLlF2PULSlqSd8uQUDLWd2mPeCgO2Or/view" target="_blank" rel="noreferrer"><h2>Connected Ambulance</h2></a>
                <p>Developed the world's first fully functional connected ambulance solution powered by Mixed Reality and AI.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1Inx8khapuG4iSa_fdsTtBgMF5FewwgvM/view" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1Inx8khapuG4iSa_fdsTtBgMF5FewwgvM/view" target="_blank" rel="noreferrer"><h2> AR-IoT Industrial Monitoring App</h2></a>
                <p>Developed metholoody to monitor more than 200 Yarn machines using AR and IoT for one of leading fabric manufacturing factory.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1VIAsQQQbJIb_u29tocOb6LLBrnBjkgW7/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1VIAsQQQbJIb_u29tocOb6LLBrnBjkgW7/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Indoor Navigation</h2></a>
                <p>Developed an indoor navigation app using Metterport Pro LIDAR camera and Vuforia SDK</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1vHayOYm1Ct-z1nT4CApUJBH5ZEd-jzbR/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1vHayOYm1Ct-z1nT4CApUJBH5ZEd-jzbR/view?usp=sharing" target="_blank" rel="noreferrer"><h2>VR Restaurent Tour</h2></a>
                <p>Developed an interective VR experience for one of leading franchising brand.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1jkJN9I3TfDkkyQTAKpR6Y0nRy8w1XNgL/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1jkJN9I3TfDkkyQTAKpR6Y0nRy8w1XNgL/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Web-XR Virtual Gallery</h2></a>
                <p>Developed a Web XR virtual gallery using the paintings that are painted by my father who has been passed away few years ago.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1XfzY75tKHYtTCGAqQe2eQuZ2gzsT0Vpg/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1XfzY75tKHYtTCGAqQe2eQuZ2gzsT0Vpg/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Mazda 3 App</h2></a>
                <p>AR application was developed for the Mazda 3 Car for visualizing interior and exterior features.</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1M9EOlroY0dbNTqPo8014_EiBnl46PO7i/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1M9EOlroY0dbNTqPo8014_EiBnl46PO7i/view?usp=sharing" target="_blank" rel="noreferrer"><h2>AEC AR App</h2></a>
                <p>Developed  AR app for my ongoing commercial building project. This application has proven invaluable in visualizing and planning the structural layout, optimizing space utilization, and refining design concepts..</p>
            </div>
            <div className="project">
                <a href="https://drive.google.com/file/d/1BgOi9KtKPp17k8s64brds7odN8EmPonJ/view?usp=sharing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://drive.google.com/file/d/1BgOi9KtKPp17k8s64brds7odN8EmPonJ/view?usp=sharing" target="_blank" rel="noreferrer"><h2>Other XR related Projects</h2></a>
                <p>I have developed various immersive applications. Some of demo videos are attached here</p>
            </div>
        </div>
    </div>
    );
}

export default Project;