import science from "./assets/gr.webp";
import art from "./assets/gr2.webp";

function ThirdPage() {
  return (
    <section>
      <div className="head">
        {" "}
        <center>
          <h1>PRODRAMS WE OFFER</h1>
          <p>
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>
        </center>
      </div>
      <div className="content">
        <div className="side-by-side-h">
          <img
            src={science}
            alt=""
            width={550}
            height={250}
            style={{
              padding: "10px",
              margin: "10px",
            }}
          />
          <div
            style={{
              padding: "20px",
            }}
          >
            <h3>
              <a href="#" className="tlink">
                Faculty of Science
              </a>{" "}
            </h3>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.{" "}
            </p>
            <a href="#" className="link">
              <u className="flink">Learn More</u>
            </a>
          </div>
        </div>

        <div className="side-by-side-h">
          <img
            src={art}
            alt=""
            width={550}
            height={250}
            style={{
              padding: "10px",
              margin: "10px",
            }}
          />
          <div
            style={{
              padding: "20px",
            }}
          >
            <h3>
              <a href="#" className="tlink">
                Faculty of Arts
              </a>
            </h3>
            <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.{" "}
            </p>

            <a href="#" className="link">
              <u className="flink">Learn More</u>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdPage;
