import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faVrCardboard, faCube } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unity Engine",
    "Unreal Engine",
    "WebXR",
    "JavaScript",
    "C++/C#",
    "Python",
    "SQL",
    "ARKit",
    "ARCore",
    "OpenXR",
    "MRTK",
    "Postman"
];

const labelsSecond = [
    "HoloLens 2",
    "Trimble",
    "Meta Quest 3",
    "Vuzix AR glass",
    "Leap Motion Controller",
    "Metterport Pro",
    "LIDAR camera",
    "Vuforia",
    "Spark AR",
    "Mind AR",
];

const labelsThird = [
    "Blender",
    "Solidworks",
    "Mixamo",
    "SketchUp",
    "Photogrametry",
    "Polycam",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCubes} size="3x"/>
                    <h3>Full-Stack XR Development</h3>
                    <p>I have built a diverse range of immersive applications across AR, VR, MR, and WebXR from the ground up. My expertise includes developing industrial-grade Mixed Reality applications integrated with IoT for industries such as emergency healthcare and apparel.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faVrCardboard} size="3x"/>
                    <h3>Hardware & Platforms</h3>
                    <p>Skilled in creating and deploying cutting-edge XR applications across various devices and platforms. Experienced in integrating spatial computing and diverse interaction methods, leveraging AI and ML to enhance user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCube} size="3x"/>
                    <h3>3D modeling & Animations</h3>
                    <p>Expert in integrating optimized 3D models and animations into XR applications, ensuring high performance and realism. Proficient in 3D asset creation, rigging, and animation workflows for immersive experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;