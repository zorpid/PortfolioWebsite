import React from "react";
//Button Image links

function About() {
  //Image links
  const about_url = new URL("../media/about/profilbild1.png", import.meta.url);
  //Icon links
  const cv_url = new URL("../media/about/cv.png", import.meta.url);
  const grades_url = new URL("../media/about/grades.png", import.meta.url);

  return (
    <>
      <div className="about_header">
        <article>
          <h1 id="about_title">About Me</h1>
        </article>
      </div>
      <div className="about_wrapper">
        <article>
          <img id="about_img" src={about_url} alt="Image of me" />
        </article>
        <article>
          <p id="about_text">
          I’m currently expanding my skills in C# through Lexicon, having previously studied Java and JavaScript. 
          Based in Malmö, Sweden, I originally worked as a chef before transitioning into programming.
          </p>
          <p id="about_text">I got experience with Seo and marketing.</p>

          <p id="about_text">
            As a person I am hard worker, determined, stress resistant and
            always interested in trying new things. Working in a team I trust
            and enjoy working with is more important to me than the work itself.
          </p>
        </article>
      </div>
      <div className="about_buttons">
        <form id="about_buttons_wrapper" target="_blank">
          <button
            id="about_button"
            formAction="https://drive.google.com/file/d/13E9AEAlNizhRwSvViXzQT2qIs3CDNvy2/view?usp=sharing"
          >
            <p>View CV</p>
            <img src={cv_url} alt="CV icon" />
          </button>
        </form>
        <form id="about_buttons_wrapper" target="_blank">
          <button
            id="about_button"
            formAction="https://drive.google.com/file/d/1jDQ01yjvLC2jQwX-QcgeALrNmOHASfWa/view?usp=sharing"
          >
            <p>View Grades</p>
            <img src={grades_url} alt="CV icon" />
          </button>
        </form>
      </div>
    </>
  );
}

export default About;