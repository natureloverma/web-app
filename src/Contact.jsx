import React from "react";
import bgimg from "./assets/grad.jpg";
import bimg from "./assets/mach.avif";
import img from "./assets/teach.jpg";
import bumn from "./assets/bumn.jpg";
import cidb from "./assets/cidb.png";
import haier from "./assets/haier.png";
import syn from "./assets/syngenta.png";

function Contact() {
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
          <b>Contact</b>
        </h4>
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

      <div className="register">
        <div className="col-1">
          <h2>Sign Up </h2>

          <form id="form" className="flex flex-col">
            <div class="wrapper">
              {" "}
              <FaUser />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your Name"
              />
            </div>

            <div class="wrapper">
              {" "}
              <FaEnvelope />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>

            <div class="wrapper">
              <IoIosLock />
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <div class="wrapper">
              <CiLock />
              <input
                type="text"
                id="rpassword"
                name="rpassword"
                placeholder="Repeat Your Password"
              />
            </div>

            <div class="Signup-link">
              <input type="checkbox" /> I agree all statements in{" "}
              <a href="/form">Terms of service</a>
            </div>

            <div class="form-group">
              <button className="btn">
                <Link to="Login">Register</Link>
              </button>
            </div>
          </form>
        </div>

        <div className="col-2">
          <img src={bgimg} alt="" />
          <div class="Signup-link">
            <center>
              <a href="/form">I am already member</a>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
