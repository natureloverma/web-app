import bgimg from "./assets/wn.webp";
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
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. <br />
            Integer efficitur tellus metus, sed feugiat leo posuere.{" "}
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
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.{" "}
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
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.{" "}
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
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa.{" "}
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
