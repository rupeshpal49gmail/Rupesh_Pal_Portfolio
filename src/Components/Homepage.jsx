import Navbar from "./Navbar";
// import resume from "../assets/Resume/Updated-Resume.pdf";
import img_avatar from "./data/avatar.json";

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
            <img src={`../assets/${img_avatar.avatar}`} alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
