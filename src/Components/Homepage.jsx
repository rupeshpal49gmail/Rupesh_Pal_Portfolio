import Navbar from "./Navbar";
// import resume from "../assets/Resume/Updated-Resume.pdf";

function Homepage() {
  return (
    <div>
      <div className="container home">
        <div className="left">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            natus!
          </h1>
          <a
            href=""
            className="btn btn-outline-warning"
            download="Updated-Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
