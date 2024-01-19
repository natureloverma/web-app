import { Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import { Fragment } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

function Contact() {
  return (
    <Fragment>
      <MyNavbar />

      <dev
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
      </dev>
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
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="contact" style={{}}>
          <h2>Get in Touch</h2>
          <br></br>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Enter Message"
            rows={10}
            cols={100}
            style={{
              padding: "10px",
              outline: "none",
            }}
          />{" "}
          <br></br>
          <br></br>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Name"
            style={{
              padding: "10px",
              outline: "none",
            }}
          />{" "}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            style={{
              padding: "10px",
              outline: "none",
            }}
          />
          <br></br>
          <br></br>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            style={{
              padding: "10px",
              outline: "none",
            }}
          />
          <br></br>
          <br></br>
          <br></br>
          <Button className="bt">SEND</Button>
        </div>
        <div
          className="contact"
          style={{
            maxWidth: "30%",
            padding: "30px",
          }}
        >
          <br></br>
          <br></br>
          <div>
            <HiOutlineHome className="licon" /> <b> Buttonwood, California.</b>
            <br></br>
            Rosemead, CA 91770
          </div>
          <br></br>
          <br></br>
          <div>
            <FaMobileScreen className="licon" />
            <b> +1 2535652365.</b>
            <br></br>
            Mon to Fri 9am to 6pm
          </div>
          <br></br>
          <br></br>
          <div>
            <HiOutlineMailOpen className="licon" />
            <b> support@colorlib.com</b>
            <br></br>
            Send us your query
            <br></br>
            anytime!
          </div>
          <br></br>
          <br></br>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Contact;
