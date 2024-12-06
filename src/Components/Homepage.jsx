import Navbar from "./Navbar";
// import resume from "../assets/Resume/Updated-Resume.pdf";
import hero from "./data/avatar.json";

function Homepage() {
  return (
    <div>
      <div className="container home">
        <div className="left">
          <h1>Lorem ipsum dolor sit amet, natus!</h1>
          <a
            href=""
            className="btn btn-outline-warning"
            download="Updated-Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img_avatar">
            <img src={`../assets/${hero.imgSrc}`} alt="avatar" />
            <img src="../assets/organization/bha.png" alt="bha" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
