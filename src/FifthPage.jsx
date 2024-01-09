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
        className="head"
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
            <img src={bgimg} alt="" width={300} height={150} top="10%" />
            <h4>
              {" "}
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bgimg} alt="" width={300} height={150} top="10%" />
            <h4>
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={bgimg} alt="" width={300} height={150} top="10%" />
            <h4>
              Teaching defined as learners to understanding and application of
              knowledge{" "}
            </h4>
          </a>
        </div>
      </div>
      <hr />
      <div>
        <h1>OUR PARTNERS</h1>
        <p width="50%" align="center">
          Teaching defined as learners to understanding and application of
          knowledge.
        </p>{" "}
        //className="marquee-content"
        <div>
          <img src={bumn} alt="" width={150} height={100} top="10%" />
          <img src={syn} alt="" width={300} height={150} top="10%" />
          <img src={cidb} alt="" width={150} height={100} top="10%" />
          <img src={bumn} alt="" width={150} height={100} top="10%" />
          <img src={syn} alt="" width={300} height={150} top="10%" />
          <img src={haier} alt="" width={150} height={100} top="10%" />
        </div>
      </div>
    </section>
  );
}

export default FifthPage;
