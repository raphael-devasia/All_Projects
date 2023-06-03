import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>
            Webfolio: <br />
            <span>Unveiling My Creations</span>
          </h1>
          <p>
            "Step into my world of web development through my project showcase. This carefully curated collection unveils the fruits of my creativity and dedication as a front-end web developer. Immerse yourself in a visual journey where each project represents a unique blend of design, functionality, and user experience. From visually stunning interfaces to meticulously crafted interactions, these projects reflect my commitment to creating captivating and seamless web experiences. Explore this showcase to discover the depth of my skills and expertise, and let's embark on a collaborative journey to bring your digital vision to life."
          </p>
          <img src="" alt="" />
        </div>

        <div className="image-container">
          <img src={heroImg} alt="men with the browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
