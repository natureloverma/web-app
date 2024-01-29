import OfferCardImage from "./assets/gr.webp";
import OfferCard1Image from "./assets/gr2.webp";

function ThirdPage() {
  return (
    <section>
      <div className="offer">
        {" "}
        <center>
          <h1>PRODRAMS WE OFFER</h1>
          <h5>
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </h5>
        </center>
      </div>
      <div className="offercard">
        <OfferCard
          imageSrc={OfferCardImage}
          title="Faculty of Science"
          discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
          sit amet condimentum."
        />
        <OfferCard1
          imageSrc={OfferCard1Image}
          title="Faculty of Arts"
          discription="Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
          vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
          sit amet condimentum."
        />
      </div>
    </section>
  );
}
function OfferCard(prop) {
  return (
    <div className="side-by-side-h">
      <img
        src={prop.imageSrc}
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
            {prop.title}
          </a>{" "}
        </h3>
        <p>{prop.discription} </p>
        <a href="#" className="link">
          <u className="flink">Learn More</u>
        </a>
      </div>
    </div>
  );
}

function OfferCard1(prop) {
  return (
    <div className="side-by-side-h">
      <img
        src={prop.imageSrc}
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
            {prop.title}
          </a>{" "}
        </h3>
        <p>{prop.discription} </p>
        <a href="#" className="link">
          <u className="flink">Learn More</u>
        </a>
      </div>
    </div>
  );
}

export default ThirdPage;
