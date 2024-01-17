import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function FirstPage() {
  return (
    <section
      className="cont"
      style={{
        color: "white",
        justifyItems: "left",
        backgroundImage: 'url("/src/assets/read.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="form">
        <h4>
          <b>EDUCATION & SCHOOL</b>
        </h4>
        <br></br>
        <h1>
          <b>SHOWCASE COURSES, EVENTS AND MORE!</b>
        </h1>
        <br></br>
        <p>
          <b>
            This is the first web page and the example page also the pages
            include that . Understanding and application of knowledge.
          </b>{" "}
        </p>
        <br></br>
        <Button className="but">Get Started Now</Button>
      </div>
    </section>
  );
}

export default FirstPage;
