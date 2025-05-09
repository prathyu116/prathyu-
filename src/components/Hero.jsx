import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className=" p-4 container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="">
          <div className="flex  items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-3.jpg"
                alt="Prathyu portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span
                className="relative w-2 h-2
rounded-full bg-emerald-400"
              >
                <span
                  className="absolute inset-0
rounded-full bg-emerald-400 animate-ping"
                ></span>
              </span>
              Open to full-time opportunities
            </div>
          </div>
          {/* <h2 className="headline-1 max-w-[15ch] sm:max-w-
[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"></h2> */}
          <h2 className=" headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Full-Stack Engineer with 2+ Years of Experience
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" href="#about" icon="download" />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
        <div className="  hidden lg:block">
          <figure className=" ">
            <img
              src="images/hello.gif"
              width={656}
              height={800}
              alt="Prathyu Prasad"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
