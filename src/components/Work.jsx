import React from 'react'
import PortfolioCard from './PortfolioCard';

const works = [
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
    tags: ["React", "Redux","Nodejs","Express","MongoDB","MaterialUI"],
    projectLink:
      "https://user-images.githubusercontent.com/67427506/174500602-70d03e02-3333-4a4d-bfd0-c35a240b17ca.mp4",
    gitHubLink: "https://github.com/prathyu116/minifb",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
    gitHubLink: "https://github.com/prathyu116/sudokkuSolver",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
    gitHubLink: "https://github.com/prathyu116/sudokkuSolver",
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
