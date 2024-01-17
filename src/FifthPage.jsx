import bgimg from "./assets/grad.jpg";
import bimg from "./assets/mach.avif";
import img from "./assets/teach.jpg";
import bumn from "./assets/bumn.jpg";
import cidb from "./assets/cidb.png";
import haier from "./assets/haier.png";
import syn from "./assets/syngenta.png";

function FifthPage() {
  return (
    <section>
      <div
        className="headd"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {" "}
        <h1>TOP STORIES</h1>
        <a href="#" className="link">
          <u className="mslink">More Stories</u>
        </a>
      </div>

      <div className="content">
        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bgimg} alt="" width={350} height={150} />
            <h4>
              {" "}
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bimg} alt="" width={350} height={150} />
            <h4>
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={img} alt="" width={350} height={150} />
            <h4>
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <hr />
      <br></br>
      <br></br>
      <br></br>

      <div className="part">
        <h1>
          <b>OUR PARTNERS</b>
        </h1>
        <br></br>
        <p>
          Teaching defined as learners to understanding and application of
          knowledge.Teaching defined as learners to understanding and
          application of knowledge.
        </p>{" "}
        <div
          className="marquee-content"
          style={{
            padding: "50px",
            margin: "20px",
            display: "flex",
            justifyContent: "space-between",
            filter: "grayscale(100%)",
          }}
        >
          <img src={bumn} alt="" width={150} height={90} />
          <img src={cidb} alt="" width={150} height={90} />
          <img src={syn} alt="" width={150} height={90} />
          <img src={bumn} alt="" width={150} height={90} />
          <img src={haier} alt="" width={150} height={90} />
        </div>
      </div>
    </section>
  );
}

export default FifthPage;
