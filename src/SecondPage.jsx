import bgimg from "./assets/sd.webp";

function SecondPage() {
  return (
    <section>
      <div className="contain">
        <div className="side-by-side">
          <center>
            {" "}
            <img src={bgimg} alt="" width={550} height={450} />
          </center>
        </div>

        <div className="side-by-side">
          <h2 className="bold">A COMPREHENSIVE TEACHIG APPROACH</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidunt malesuada massa.{" "}
          </p>
          <p>
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>

          <a href="#" className="link">
            <u className="flink">Learn More</u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SecondPage;
