function App() {
  return(
    <div>
      <nav className="navbar">
        <h2> ADEGBILE ADEKUNLE</h2>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#service"> Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <main>
        <section className="hero">
          <p className="small-text"> GRAPHIC DESIGNER</p>

          <h1>
            I create Virtual Designs that makes brands stand Out.
          </h1>

          <p className="hero-text">
            I create memorable visual identities, social media designs and creative experience for brands.
          </p>

          <a href="#work" className="button">
            View My Work
          </a>
        </section>

        <section id="work" className="section">
          <p className="small-text"> SELECTED WORK</p>

          <h2>My ProJects</h2>

          <div className="projects">
            <div className="project">
              <div className="project-image">PROJECT 01</div>
              <h3>Brand Identity</h3>
              <p>Logo and Visual Identity design</p>
            </div>

            <div className="project">
              <div className="project-image">PROJECT 02</div>
              <h3>Social Media</h3>
              <p>Creative social media campaign</p>
            </div>


            <div className="project">
              <div className="project-image">PROJECT 03</div>
              <h3>Poster Design</h3>
              <p>Event poster and promotional design.</p>
            </div>
            
          </div>
        </section>


        <section id="about" className="section-about">
          <p className="small-text">ABOUT ME</p>

          <h2>
            I'm a graphic Designer who turns ideas into Visual experiences.
          </h2>

          <p>I enjoy creating clean , memorable and effective designs that help brands communicate with their audience</p>
        </section>

        <section id="services" className="section">
          <p className="small-text">What I Do</p>

          <h2>Services</h2>

          <div className="services">
            <p>01- Brand Identity</p>
            <p>02- Logo Design</p>
            <p>03- Social Media Design</p>
            <p>04- Poster & Flyer Design</p>
            <p>05- Packaging Design</p>
          </div>
        </section>


        <section id="contact" className="contact">
          <p className="small-text"> GET IN TOUCH</p>

          <h2>Let's work together .</h2>

          <a href="BetaBelVentures@gmail.com">
            BetaBelVentures@gmail.com
          </a>
        </section>
      </main>

      <footer>
        <p>@ 2026 BetaBel-Ventures</p>
      </footer>
    </div>
  );
}


export default App;