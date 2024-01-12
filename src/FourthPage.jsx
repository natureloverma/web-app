import React from "react";
import bgimg from "./assets/tr.avif";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { GrNext } from "react-icons/gr";

function FourthPage() {
  return (
    <section>
      <div className="fcontain">
        <div className="fside-by-side">
          <h1
            style={{
              padding: "10px",
            }}
          >
            ESSENTIAL RESOURCES
          </h1>

          <p
            style={{
              padding: "10px",
              margin: "10px",
            }}
          >
            {" "}
            The aim of teaching is not only to transmit information, but also to
            transform students from passive recipients. A teacher requires not
            only knowledge of subject matter.{" "}
          </p>

          <div
            className="side-by-side-hh"
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
            <p
              style={{
                width: "500px",
              }}
            >
              Teaching can be defined as engagement with learners to enable
              their understanding and application of knowledge.{" "}
              <Button className="btn">
                <GrNext />
              </Button>
            </p>
          </div>

          <div
            className="side-by-side-hh"
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
            <p
              style={{
                width: "500px",
              }}
            >
              Teaching can be defined as engagement with learners to enable
              their understanding and application of knowledge.{" "}
              <Button className="btn">
                <GrNext />
              </Button>
            </p>
          </div>
          <div
            className="side-by-side-hh"
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
            <p
              style={{
                width: "500px",
              }}
            >
              Teaching can be defined as engagement with learners to enable
              their understanding and application of knowledge.{" "}
              <Button className="btn">
                <GrNext />
              </Button>
            </p>
          </div>
        </div>
        <div className="ffside-by-side">
          <center>
            {" "}
            <img src={bgimg} alt="" width={675} height={990} />
          </center>
        </div>
      </div>
    </section>
  );
}

export default FourthPage;
