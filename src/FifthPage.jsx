import graduation from "./assets/graduation.webp";
import machine from "./assets/machine.webp";
import learning from "./assets/onlinel.webp";
import bumn from "./assets/bumn.jpg";
import cidb from "./assets/cidb.png";
import haier from "./assets/haier.png";
import syngenta from "./assets/syngenta.png";

function FifthPage() {
  return (
    <section>
      <div
        className="headd"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {" "}
        <h1>TOP STORIES</h1>
        <a href="#" className="link">
          <u className="mslink">More Stories</u>
        </a>
      </div>

      <div className="content">
        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={graduation} alt="" width={350} height={100} />
            <h4>
              {" "}
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={machine} alt="" width={350} height={100} />
            <h4>
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories{" "}
            </h4>
          </a>
        </div>

        <div className="side-by-side-f">
          <a href="#" className="filink">
            <img src={learning} alt="" width={350} height={100} />
            <h4>
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories{" "}
            </h4>
          </a>
        </div>
      </div>

      <hr />

      <div className="part">
        <h1>
          <b>OUR PARTNERS</b>
        </h1>
        <br />
        <p>
          Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
          ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
        </p>{" "}
        <div
          className="marquee-content"
          style={{
            padding: "50px",
            margin: "20px",
            display: "flex",
            justifyContent: "space-between",
            filter: "grayscale(90%)",
          }}
        >
          <img src={bumn} alt="" width={100} height={100} />
          <img src={cidb} alt="" width={100} height={100} />
          <img src={syngenta} alt="" width={100} height={100} />
          <img src={bumn} alt="" width={100} height={100} />
          <img src={haier} alt="" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}

export default FifthPage;
