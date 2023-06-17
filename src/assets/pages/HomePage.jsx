import React, { useRef, useState } from "react";
import Layout from "../components/Layout";

const HomePage = () => {
  const aboutHeadingRef = useRef();

  const [animateAbout, setAnimateAbout] = useState("");

  window.addEventListener("scroll", () => {
    setAnimateAbout(
      scrollY > aboutHeadingRef.current.clientHeight && "animate-about"
    );
  });

  const changeLocation = (location) => {
    let newURL = window.location.origin + location;

    window.open(newURL, "_blank");
  };

  return (
    <>
      <section>
        <h1 className="heading welcome">welcome to my portfolio</h1>
        <div className="intro-container">
          <div title="marlon" className="marlon"></div>
          <div className="brief-container">
            <h2 className="sub-heading career">
              Front-End Developer/Web Designer
            </h2>
            <h3 className="third-heading name">Marlon Downie</h3>
            <article className="intro-brief">
              I'm Marlon Downie. A student driven by the passion for web design
              and graphic design based in Barbados.
            </article>
          </div>
        </div>
      </section>
      {/* <video
        src="../../../public/mp4/FIRST VIDOE EDIT.mp4"
        className="about-video"
        type="video/mp4"
        autoPlay
        muted
        loop
      >
        Video not supported
      </video> */}
      <section className="about-container">
        <h1 className="heading about" ref={aboutHeadingRef}>
          about
        </h1>
        <div className={animateAbout}>
          <article className="intro-about ">
            As a student pursuing a BSc. Computer Science at the University of
            the West Indies Cavehill Campus, only four years ago I had no kind
            of motivation to do any Computer Studies related subjects, including
            programming and web design, until I completed CSEC Information
            Technology and attained a Grade I. Since then, designing and
            programming became more than a subject, it became a lifestyle where
            everyday is day of seeing code.
          </article>
        </div>
      </section>

      <section className="projects-container">
        <h1 className="heading projects">Projects</h1>
        <div className="project-container">
          {/* <img src="" alt="project Image" className="project-image" /> */}
          <div className="project-image chaunie"></div>

          <p className="project-description">
            This website was my first complete react project. Examples of hooks
            that were used are BrowserRouter, Link, useState and useRef.
          </p>
          <div className="tech-stack">
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
          </div>
          <button
            className="visit"
            onClick={() => changeLocation("/hubbcentralservicesinc.github.io/")}
          >
            Visit site
          </button>
        </div>
        <div className="project-container">
          {/* <img src="" alt="project Image" className="project-image" /> */}
          <div className="project-image hubb"></div>
          <p className="project-description">
            This website was my first major project. Within this website, I only
            utilized vanilla javascript, as well as HTML and CSS.
          </p>{" "}
          <div className="tech-stack">
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
          </div>
          <button
            className="visit"
            onClick={() => changeLocation("/chaunies.io/")}
          >
            Visit site
          </button>
        </div>
      </section>

      <footer className="copyright-container">
        <p>Copyright &copy;2023. All rights are reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
