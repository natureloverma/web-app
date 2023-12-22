// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light p-4 mt-5"
      style={{
        width: "100%",
        textAlign: "left",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>UNIVERSITY</h3>
            <p>Landmark Education</p>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <p> </p>
            <p>Work</p>
            <p>Services</p>
            <p>Products</p>
            <p>Tips & Tricks</p>
          </div>

          <div className="col-md-2">
            <h5>Programs</h5>
            <p> </p>
            <p>Air freight</p>
            <p>Ocean freight</p>
            <p>Large projects</p>
          </div>

          <div className="col-md-2">
            <h5>Resourses</h5>
            <p> </p>
            <p>FAQ</p>
            <p>Submit Ticket</p>
            <p>Contact Us</p>
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
              ></input>
              <Button
                style={{
                  backgroundColor: "green",
                  borderRadius: "0%",
                  border: "none",
                  fontSize: "x-large",
                  lineHeight: "1.5",
                }}
              >
                <IoSendSharp />
              </Button>
            </div>

            <p>
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
            </p>
          </div>
        </div>
        <hr />
        {/* get line  */}

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; 2023 All rights reserved | This is made with
              <line className="land">
                <FaHeart />{" "}
              </line>
              by{" "}
              <a href="#" className="land">
                landmark
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
