import bgimg from "./assets/sc.jpg";
import img from "./assets/art.jpg";

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
      <div className="content">
        <div className="side-by-side-h">
          <img src={bgimg} alt="" width={550} height={250} />
          <br></br>
          <h3>
            <a href="#" className="tlink">
              <br></br>
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
          <img src={img} alt="" width={550} height={250} />
          <br></br>

          <h3>
            <a href="#" className="tlink">
              <br></br>
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
