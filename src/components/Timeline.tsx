import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="MAY 2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior XR|VR Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mediwave (Pvt) Ltd, Sri Lanka</h4>
            <p>
            Developed the <strong>world's first</strong> fully functional 5G-connected ambulance solution powered by <strong>Mixed Reality and AI</strong> using <strong>Microsoft HoloLens 2, Vuzix Smart Glasses, and Azure services</strong> enabling real-time communication and advanced medical data visualization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="AUG 2022 - MAY 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer- Unity3D</h3>
            <h4 className="vertical-timeline-element-subtitle">LKSimulations (Pvt) Ltd, Sri Lanka</h4>
            <p>
              Developed various AR & VR applications from marker-based, markerless,web-bassed and social media AR Filters,etc using Meta Quest VR headsets and Leap Motion controllers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="APR 2021 - AUG 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Solutions Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">X.O Concepts (Pvt) Ltd, Sri Lanka</h4>
            <p>
              Developed AR-IoT based industrial monitoring applications for leading textile factories.Enhased the 'XdotO App' company's official app adding some AR experiences.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="MAR 2019 - SEP 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Training Electronics Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">A&T Labs (Pvt) Ltd, Sri Lanka</h4>
            <p>
              Worked on various research related projects ranging AR,electronincs,3D modeling, industrial monitoring, hardware/software/firmware developments, etc.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;