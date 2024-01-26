import bumn from "./assets/bumn.jpg";
import cidb from "./assets/cidb.png";
import haier from "./assets/haier.png";
import syngenta from "./assets/syngenta.png";

import TopStoriesCard1Image from "./assets/graduation.webp";
import TopStoriesCard2Image from "./assets/machine.webp";
import TopStoriesCard3Image from "./assets/onlinel.webp";

function TopStories() {
  return (
    <section>
      <div
        className="headd"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {" "}
        <h1>
          <b>TOP STORIES</b>
        </h1>
        <a href="#" className="link">
          <u className="mslink">More Stories</u>
        </a>
      </div>

      <div className="content">
        <TopStoryCard
          imageSrc={TopStoriesCard1Image}
          title="Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories"
        />
        <TopStoryCard1
          imageSrc={TopStoriesCard2Image}
          title="Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories"
        />
        <TopStoryCard2
          imageSrc={TopStoriesCard3Image}
          title="Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories"
        />
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
function TopStoryCard(prop) {
  return (
    <div className="side-by-side-f">
      <a href="#" className="filink">
        <img src={prop.imageSrc} alt="" width={350} height={200} />
        <h4
          style={{
            margin: "20px",
          }}
        >
          {prop.title}
        </h4>
      </a>
    </div>
  );
}

function TopStoryCard1(prop) {
  return (
    <div className="side-by-side-f">
      <a href="#" className="filink">
        <img src={prop.imageSrc} alt="" width={350} height={200} />
        <h4
          style={{
            margin: "20px",
          }}
        >
          {prop.title}
        </h4>
      </a>
    </div>
  );
}

function TopStoryCard2(prop) {
  return (
    <div className="side-by-side-f">
      <a href="#" className="filink">
        <img src={prop.imageSrc} alt="" width={350} height={200} />
        <h4
          style={{
            margin: "20px",
          }}
        >
          {prop.title}
        </h4>
      </a>
    </div>
  );
}

export default TopStories;
