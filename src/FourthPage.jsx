import React from "react";
import bgimg from "./assets/work.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { GrNext } from "react-icons/gr";

function FourthPage() {
  return (
    <section>
      <div className="fcontain">
        <div className="fside-by-side">
          <h1>ESSENTIAL RESOURCES</h1>
          <p>
            The aim of teaching is not only to transmit information, but also to
            transform students from passive recipients.{" "}
          </p>
          <p>A teacher requires not only knowledge of subject matter. </p>

          <div
            className="side-by-side-h"
            style={{
              width: "100%",
              border: "1px solid lightgray",
              padding: "10px",
              margin: "20px",
            }}
          >
            <h3>
              <a href="#" className="next">
                First year students
              </a>
            </h3>
            <p>
              Teaching can be defined as engagement with learners to enable
              their understanding and application of knowledge.{" "}
            </p>
            <Button className="btn">
              <GrNext />
            </Button>
          </div>

          <div
            className="side-by-side-h"
            style={{
              width: "100%",
              border: "1px solid lightgray",
              padding: "10px",
              margin: "20px",
            }}
          >
            <h3>
              <a href="#" className="next">
                Tuition $ fees
              </a>
            </h3>
            <p>
              Teaching can be defined as engagement with learners to enable
              their understanding and application of knowledge.{" "}
            </p>
            <Button className="btn">
              <GrNext />
            </Button>
          </div>
          <div
            className="side-by-side-h"
            style={{
              width: "100%",
              border: "1px solid lightgray",
              padding: "10px",
              margin: "20px",
            }}
          >
            <h3>
              <a href="#" className="next">
                International students
              </a>
            </h3>
            <p>
              Teaching can be defined as engagement with learners to enable
              their understanding and application of knowledge.{" "}
            </p>
            <Button className="btn">
              <GrNext />
            </Button>
          </div>
        </div>
        <div className="fside-by-side">
          <center>
            {" "}
            <img src={bgimg} alt="" width={500} height={450} />
          </center>
        </div>
      </div>
    </section>
  );
}

export default FourthPage;
