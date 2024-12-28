import React from "react";
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/file-type-aws.512x335.png",
    label: "AWS",
    desc: "Amazon Web Services",
  },
  {
    imgSrc: "/images/file-type-nginx.svg",
    label: "Nginx",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/type-script.svg",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containerization Platform",
  },
  {
    imgSrc: "/images/nestjs.svg",
    label: "Nest",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/redis.svg",
    label: "Redis",
    desc: "Database",
  },
  {
    imgSrc: "/images/angular.svg",
    label: "Angular",
    desc: "Framework",
  },
  {
    imgSrc: "/images/rabbitmq.svg",
    label: "RabbitMQ ",
    desc: "Message Broker",
  },
  {
    imgSrc: "/images/cicd.svg",
    label: "GitHub Actions  ",
    desc: "CI/CD Automation",
  },
];
const Skill = () => {
  return (
    <section className="section">
      <div className="container border">
        <h2 className="headline-2">Essential Tool I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc,label,desc},key)=>{
                return <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc}/>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;
