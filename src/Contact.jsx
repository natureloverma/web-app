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
          backgroundImage: 'url("/src/assets/ft.webp")',
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
        <div className="get">
          <div className="contact" style={{ padding: "0px" }}>
            <h2>Get in Touch</h2>
            <br />
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter Message"
              rows={10}
              cols={80}
              style={{
                padding: "10px",
                outline: "none",
              }}
            />{" "}
            <table>
              <tr>
                <td>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Your Name"
                    style={{
                      padding: "10px",
                      outline: "none",
                      marginTop: "50px",
                      width: "360px",
                    }}
                  />{" "}
                </td>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    style={{
                      padding: "10px",
                      outline: "none",
                      marginTop: "50px",
                      marginLeft: "50px",
                      width: "360px",
                    }}
                  />
                </td>
              </tr>{" "}
            </table>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              style={{
                padding: "10px",
                outline: "none",
                marginTop: "50px",
                width: "770px",
              }}
            />
            <br />
            <Button className="bt">SEND</Button>
          </div>
          <div
            className="tact"
            style={{
              paddingTop: "70px",
            }}
          >
            <table cellPadding={"20px"}>
              <tr>
                <td>
                  <HiOutlineHome className="licon" />
                </td>
                <td>
                  <b> Buttonwood, California.</b>
                  <br />
                  Rosemead, CA 91770
                </td>
              </tr>
              <tr>
                <td>
                  <FaMobileScreen className="licon" />
                </td>
                <td>
                  <b> +1 2535652365. </b>
                  <br />
                  Mon to Fri 9am to 6pm
                </td>
              </tr>
              <tr>
                <td>
                  <HiOutlineMailOpen className="licon" />
                </td>
                <td>
                  <b> support@colorlib.com </b>
                  Send us your query <br />
                  anytime!
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Contact;
