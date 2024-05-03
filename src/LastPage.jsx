import bgimg from "./assets/last.webp";

function LastPage() {
  return (
    <section>
      <div className="contt">
        <div className="side-by">
          <center>
            {" "}
            <img src={bgimg} alt="" width={650} height={650} />
          </center>
        </div>

        <div className="side-byy">
          <h1>TRUSTED BY OVER 6000+ STUDENTS</h1>
          <br></br> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            felis felis, vulputate sit amet mauris et, semper aliquam ligula.
            Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
            vitae tincidunt malesuada massa.{" "}
          </p>
          <br></br>
          <p>
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>
          <br></br>
          <a href="#" className="link">
            <u className="llink">Join Now</u>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LastPage;
