import React from 'react'


const aboutItems = [
    
    {
        label: 'Years of experience',
        number: 2
    }
];
const About = () => {
    return (
      <section id="about" className="">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
              I am a full-stack web developer with 2 years of experience
              building scalable solutions for the healthcare industry. I
              specialize in backend development using Node.js, microservices,
              and AWS. I am skilled in React.js and TypeScript and focus on
              creating efficient and reliable applications. I enjoy building
              systems from scratch and improving their performance.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {item.number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400"> {item.label}</p>
                </div>
              ))}
              <img
                src="/images/technologist.svg"
                alt="logo"
                width={30}
                height={30}
                className=" ml-auto md: w-[60px] md:h-[60px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default About
