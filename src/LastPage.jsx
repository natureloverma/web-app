import React from "react";
import bgimg from "./assets/work.jpg";

function SecondPage() {
  return (
    <section>
      <div className="cont">
        <div className="side-by">
          <center>
            {" "}
            <img src={bgimg} alt="" width={500} height={450} />
          </center>
        </div>

        <div className="side-byy">
          <h1>TRUSTED BY OVER 6000+ STUDENTS</h1>
          <br></br> <br></br>
          <p>
            Teaching can be defined as engagement with learners to enable their
            understanding and application of knowledge, concepts and
            processes.To teach is to engage students in learning; thus teaching
            consists of getting students involved in the active construction of
            knowledge.{" "}
          </p>
          <br></br>
          <p>
            A teacher requires not only knowledge of subject matter, but
            knowledge of how students learn and how to transform them into
            active learners. The aim of teaching is not only to transmit
            information, but also to transform students from passive recipients
            of other people's knowledge into active constructors of their own
            and others' knowledge.
          </p>
          <br></br>
          <a href="#" className="link">
            <u className="llink">Join Now</u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondPage;
