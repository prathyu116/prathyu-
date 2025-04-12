import React from 'react'
import PortfolioCard from './PortfolioCard';

const works = [
  {
    imgSrc: "/images/mock-ai.gif",
    title: "Mock Mentor",
    tags: ["Nextjs", "TailwindCSS", "Firebase", "GeminiAI", "shadcn/ui"],
    projectLink: "https://mock-mentor.vercel.app/",
    gitHubLink: "https://github.com/prathyu116/MockMentor",
  },
  {
    imgSrc: "/images/sudokku.gif",
    title: "Sudoku Game",
    tags: ["HTML", "CSS", "JS", "recursion", "backtracking"],
    projectLink: "https://idyllic-sunshine-c7a72f.netlify.app/",
    gitHubLink: "https://github.com/prathyu116/sudokkuSolver",
  },
  {
    imgSrc: "/images/miniFb.gif",
    title: "Social Media Light",
    tags: ["React", "Redux", "Nodejs", "Express", "MongoDB", "MaterialUI"],
    projectLink:
      "https://user-images.githubusercontent.com/67427506/174500602-70d03e02-3333-4a4d-bfd0-c35a240b17ca.mp4",
    gitHubLink: "https://github.com/prathyu116/minifb",
  },
  {
    imgSrc: "/images/netflix.gif",
    title: "Netflix clone",
    tags: ["React", "API", "Axios", "CSS"],
    projectLink: "https://react-netflix-clone--55.herokuapp.com/",
    gitHubLink: "https://github.com/prathyu116/React-Netflix-Clone",
  },
  {
    imgSrc: "/images/type.gif",
    title: "Typing Test Application",
    tags: ["Web-design", "HTML", "CSS", "React", "Responsive design"],
    projectLink: "https://github.com/prathyu116/react-Flash-Type",
    gitHubLink: "https://prathyu116.github.io/react-Flash-Type/",
  },
  {
    imgSrc: "/images/messm.gif",
    title: "Mess Management Application",
    tags: ["json-server", "Bootstrap", "Angular", "Responsive design"],
    projectLink: "https://github.com/prathyu116/MESS-ANGULAR",
    gitHubLink: "https://github.com/prathyu116/MESS-ANGULAR",
  },
  {
    imgSrc: "/images/brba.gif",
    title: "Breaking-Bad-Cast",
    tags: ["API", "Axios", "React", "Responsive design"],
    projectLink: "https://breaking--bad--characters.herokuapp.com/",
    gitHubLink: "https://github.com/prathyu116/Breaking_Bad_cast",
  },
];
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(
            (
              { imgSrc, title, tags, projectLink, gitHubLink, description },
              key
            ) => {
              return (
                <PortfolioCard
                  key={key}
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  gitHubLink={gitHubLink}
                  description={description}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Work
