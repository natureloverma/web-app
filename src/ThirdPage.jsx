import React from "react";
import bgimg from "./assets/work.jpg";

function ThirdPage() {
  return (
    <section>
      <div className="head">
        {" "}
        <center>
          <h1>PRODRAMS WE OFFER</h1>
          <p>
            Teaching can be defined as engagement with learners to enable their
            understanding and application of knowledge, concepts and processes.
            It includes design, content selection, delivery, assessment and
            reflection.
          </p>
        </center>
      </div>
      <div className="content" id="root">
        <div className="side-by-side-h">
          <img src={bgimg} alt="" width={600} height={250} />
          <h3>
            <a href="#" className="tlink">
              Faculty of Science
            </a>{" "}
          </h3>
          <p>
            Teaching can be defined as engagement with learners to enable their
            understanding and application of knowledge, concepts and processes.
            It includes design, content selection, delivery, assessment and
            reflection.{" "}
          </p>
          <a href="#" className="link">
            <u className="flink">Learn More</u>
          </a>
        </div>

        <div className="side-by-side-h">
          <img src={bgimg} alt="" width={600} height={250} top="10%" />
          <h3>
            <a href="#" className="tlink">
              Faculty of Arts
            </a>
          </h3>
          <p>
            Teaching can be defined as engagement with learners to enable their
            understanding and application of knowledge, concepts and processes.
            It includes design, content selection, delivery, assessment and
            reflection.{" "}
          </p>

          <a href="#" className="link">
            <u className="flink">Learn More</u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ThirdPage;
