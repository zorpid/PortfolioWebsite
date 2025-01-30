function Home({ updateNavState }) {
    const portait_url = new URL("../media/home/profilbild.png", import.meta.url);
    return (
      <>
        <div className="home_wrapper">
          <article>
            <p id="home_hello">Hello There, I'm</p>
            <h1 id="home_name">Robin Nilsson</h1>
            <h4 id="home_jobtitle">Java/C# Developer</h4>
            <p id="home_desc">
              I'm a Java/C# Developer with Javascript knowledge, located in
              Malmö, Sweden.{" "}
            </p>
            <p id="home_desc">Looking for internship during March-May 2025.</p>
          </article>
          <article>
            <img id="home_img" src={portait_url} alt="portrait of me" />
          </article>
        </div>
      </>
    );
  }
  
  export default Home;