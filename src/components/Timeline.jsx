import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Timeline = () => {
  return (
    <section className="section" id="timeline">
      <div className="container">
        <div>
          <h2 className="headline-2">Work Experience & Education</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            A look at my professional journey and educational background.
          </p>
        </div>
        <VerticalTimeline className="container" layout="1-column-left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#27272A66", color: "#FFFFFF" }}
            contentArrowStyle={{ borderRight: "7px solid #1E1E1E" }}
            date="Aug 2022 - Nov 2024"
            iconStyle={{ background: "#00BFA6", color: "#FFFFFF" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title text-sky-400 font-semibold">
              Backend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle ">
              Neos Healthtech Pvt. Ltd , Remote
            </h4>
            <p className="text-xs text-zinc-400">
              Contributed to the development of Flow, a cloud-based application
              designed to provide radiologists with essential tools and AI
              assistance, streamlining workflows and improving diagnostic
              accuracy. Designed and implemented microservices using Node.js,
              TypeScript, and MongoDB, ensuring scalability and performance.
              Reduced codebase complexity by refactoring into modular, reusable
              components using OOP principles. Implemented WebSocket protocol to
              enable real-time tracking of user status, improving system
              responsiveness. Significantly improved inter-service communication
              by migrating from REST to RabbitMQ. Developed an AI-powered bot to
              automate medical report generation, streamlining diagnostics.
              Customized the OHIF DICOM Viewer to meet specific product
              requirements. Gained expertise in radiology workflows, DICOM, and
              on-premise deployment with Nginx.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#27272A66 ", color: "#FFFFFF" }}
            contentArrowStyle={{ borderRight: "7px solid #2A2A2A" }}
            date="July 2018 - Apr 2021"
            iconStyle={{ background: "#FF7043", color: "#FFFFFF" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-sky-400 font-semibold">
              Bachelor of Science in CS
            </h3>{" "}
            <h4 className="vertical-timeline-element-subtitle ">
              Govt College Kasaragod, Kerala
            </h4>{" "}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#27272A66 ", color: "#FFFFFF" }}
            contentArrowStyle={{ borderRight: "7px solid #333333" }}
            date="July 2016 - June 2018"
            iconStyle={{ background: "#1E88E5", color: "#FFFFFF" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-sky-400 font-semibold">
              Higher Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle ">
              Durga Higher Secondary School, kerala
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline
