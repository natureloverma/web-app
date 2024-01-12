import React from "react";
import bgimg from "./assets/te.jpg";

function SecondPage() {
  return (
    <section>
      <div className="contain">
        <div className="side-by-side">
          <center>
            {" "}
            <img src={bgimg} alt="" width={500} height={450} />
          </center>
        </div>

        <div className="side-by-side">
          <h1>A COMPREHENSIVE TEACHIG APPROACH</h1>
          <p>
            Teaching can be defined as engagement with learners to enable their
            understanding and application of knowledge, concepts and processes.
            It includes design, content selection, delivery, assessment and
            reflection.{" "}
          </p>
          <p>
            To teach is to engage students in learning; thus teaching consists
            of getting students involved in the active construction of
            knowledge. A teacher requires not only knowledge of subject matter,
            but knowledge of how students learn and how to transform them into
            active learners. Teaching is fundamentally about creating the
            pedagogical, social, and ethical conditions under which students
            agree to take charge of their own learning, individually and
            collectively.
          </p>

          <a href="#" className="link">
            <u className="flink">Learn More</u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondPage;
