import React from "react";
import bgimg from "./assets/work.jpg";
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
          <u className="flink">More Stories</u>
        </a>
      </div>

      <div className="content" id="root">
        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bgimg} alt="" width={200} height={125} />
            <h4>
              {" "}
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bgimg} alt="" width={200} height={125} />
            <h4>
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bgimg} alt="" width={200} height={125} />
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
        <p width="50%" align="center">
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
          <img src={bumn} alt="" width={125} height={90} />
          <img src={cidb} alt="" width={125} height={90} />
          <img src={syn} alt="" width={200} height={90} />
          <img src={bumn} alt="" width={125} height={90} />
          <img src={haier} alt="" width={125} height={90} />
        </div>
      </div>
    </section>
  );
}

export default FifthPage;
