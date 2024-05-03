// Footer.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light p-4 mt-5"
      style={{
        textAlign: "left",
      }}
    >
      <div className="container">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-2">
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <h3>UNIVERSITY</h3>
              <p>Landmark Education</p>
            </a>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <p>
              <a href="#">Work</a>
            </p>
            <p>
              <a href="#">Services</a>
            </p>
            <p>
              <a href="#">Products</a>
            </p>
            <p>
              <a href="#">Tips & Tricks</a>
            </p>
          </div>

          <div className="col-md-2">
            <h5>Programs</h5>
            <p> </p>
            <p>
              <a href="#">Air freight</a>
            </p>
            <p>
              <a href="#">Ocean freight</a>
            </p>
            <p>
              <a href="#">Large projects</a>
            </p>
          </div>

          <div className="col-md-2">
            <h5>Resourses</h5>
            <p> </p>
            <p>
              <a href="#">FAQ</a>
            </p>
            <p>
              <a href="#">Submit Ticket</a>
            </p>
            <p>
              <a href="#">Contact Us</a>
            </p>
          </div>

          <div className="col-md-4">
            <h5>Newsletter</h5>
            <p> </p>
            <p>Subsrcibe newsletter to get updates.</p>
            <div className="mail">
              <input
                type="text"
                id="email"
                className="email"
                placeholder="Enter your email"
                style={{ outline: "none" }}
              ></input>
              <Button
                style={{
                  backgroundColor: "green",
                  borderRadius: "0%",
                  border: "none",
                  fontSize: "xx-large",
                  lineHeight: "1.5",
                }}
              >
                <IoSendSharp />
              </Button>
            </div>
            <br />
            <div className="footerlink">
              <a
                className="slink"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website.com%2F&amp;src=sdkpreparse"
              >
                <FaFacebook />{" "}
              </a>

              <a
                className="slink"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/search?q=instagram&rlz=1C1KNTJ_enLK1078LK1078&oq=ins&gs_lcrp=EgZjaHJvbWUqDQgDEAAYgwEYsQMYgAQyDwgAEEUYORiDARixAxiABDIMCAEQIxgnGIAEGIoFMgYIAhAjGCcyDQgDEAAYgwEYsQMYgAQyEAgEEAAYgwEYsQMYgAQYigUyBggFEAUYQDIGCAYQRRg8MgYIBxBFGD3SAQg1OTczajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
              >
                <FaInstagram />{" "}
              </a>

              <a
                className="slink"
                target="_blank"
                rel="noreferrer"
                href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20profile_d.c_tid.kwd-10521864172_n.g_mt.e_geo.9069438&mcid=6844056167778418689&cid=&gclid=Cj0KCQiAyeWrBhDDARIsAGP1mWTU-xqbxkAiRc7caMkheyOpX1IZRhdVj10wsD-k8XXycpGFBNue41saAvRbEALw_wcB&gclsrc=aw.ds"
              >
                <FaLinkedinIn />{" "}
              </a>

              <a
                className="slink"
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20profile_d.c_tid.kwd-10521864172_n.g_mt.e_geo.9069438&mcid=6844056167778418689&cid=&gclid=Cj0KCQiAyeWrBhDDARIsAGP1mWTU-xqbxkAiRc7caMkheyOpX1IZRhdVj10wsD-k8XXycpGFBNue41saAvRbEALw_wcB&gclsrc=aw.ds"
              >
                <FaYoutube />{" "}
              </a>
            </div>
          </div>
        </div>
        <br /> <br />
        <hr />
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="whitespace-no-wrap overflow-visible">
              Copyright &copy; 2024 All rights reserved | This is made with
              <span className="land">
                <FaHeart />{" "}
              </span>
              by{" "}
              <a href="#" className="landd">
                landmark
              </a>
            </p>{" "}
          </div>
        </div>
        <Button
          className="bn"
          style={{
            backgroundColor: "green",
            borderRadius: "360%",
            border: "green",
            fontSize: "xx-large",
            lineHeight: "1",
            fixed: "bottom",
          }}
        >
          <FaLongArrowAltUp />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
