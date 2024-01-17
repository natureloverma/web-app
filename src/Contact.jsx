// import React from "react";
import bgimg from "./assets/grad.jpg";
// import bimg from "./assets/mach.avif";
// import img from "./assets/teach.jpg";
// import bumn from "./assets/bumn.jpg";
// import cidb from "./assets/cidb.png";
// import haier from "./assets/haier.png";
// import syn from "./assets/syngenta.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import { Fragment } from "react";
import { FaExclamationCircle } from "react-icons/fa";

function Contact() {
  return (
    <Fragment>
      <MyNavbar />

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
        </div>
      </section>
      <div className="con">
        {" "}
        <center>
          <div className="fxc">
            <FaExclamationCircle />
          </div>
          <h3>Sorry! Something went wrong.</h3>
          <p>
            This page did not load Google Maps correctly. See the JavaScript
            console for technical details.
          </p>
        </center>
      </div>
      <section>
        <div className="register">
          <div className="col-1">
            <h2>Get in Touch</h2>

            <form id="form" className="flex flex-col">
              <div>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                />
              </div>

              <div>
                {" "}
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                />
              </div>

              <div>
                {" "}
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject"
                />
              </div>
            </form>
          </div>
        </div>
        <Button className="but">Get Started Now</Button>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Contact;
