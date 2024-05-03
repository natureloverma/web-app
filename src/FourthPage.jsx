import bgimg from "./assets/wn.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { GrNext } from "react-icons/gr";

function FourthPage() {
  return (
    <section>
      <div className="resource">
        <div className="eresource">
          <h2
            style={{
              padding: "10px",
            }}
          >
            <b>ESSENTIAL RESOURCES</b>
          </h2>
          <p
            style={{
              padding: "10px",
            }}
          >
            {" "}
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. <br />
            Integer efficitur tellus metus, sed feugiat leo posuere.{" "}
          </p>
          <div className="resourcecard">
            <ResourcesCard
              title="First year students"
              discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa."
            />
            <ResourcesCard1
              title="Tuition $ fees"
              discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt mi, et malesuada massa."
            />
            <ResourcesCard2
              title="International students"
              discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt mi, et malesuada massa."
            />
          </div>{" "}
        </div>
        <div className="resourc">
          <center>
            {" "}
            <img src={bgimg} alt="" width={"100%"} height={"auto"} />
          </center>
        </div>{" "}
      </div>
    </section>
  );
}
function ResourcesCard(prop) {
  return (
    <div
      className="side-by-side-hh"
      style={{
        width: "100%",
        border: "1px solid lightgray",
        padding: "20px",
        margin: "10px",
      }}
    >
      {" "}
      <h3>
        <a href="#" className="next">
          {prop.title}{" "}
        </a>{" "}
      </h3>
      <p
        style={{
          width: "450px",
        }}
      >
        {prop.discription}
        <Button className="btn">
          <GrNext />
        </Button>
      </p>
    </div>
  );
}
function ResourcesCard1(prop) {
  return (
    <div
      className="side-by-side-hh"
      style={{
        width: "100%",
        border: "1px solid lightgray",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h3>
        <a href="#" className="next">
          {prop.title}{" "}
        </a>
      </h3>
      <p
        style={{
          width: "450px",
        }}
      >
        {prop.discription}
        <Button className="btn">
          <GrNext />
        </Button>
      </p>
    </div>
  );
}
function ResourcesCard2(prop) {
  return (
    <div
      className="side-by-side-hh"
      style={{
        width: "100%",
        border: "1px solid lightgray",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h3>
        <a href="#" className="next">
          {prop.title}{" "}
        </a>
      </h3>
      <p
        style={{
          width: "450px",
        }}
      >
        {prop.discription}
        <Button className="btn">
          <GrNext />
        </Button>
      </p>
    </div>
  );
}
export default FourthPage;
