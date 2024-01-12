// MyNavbar.jsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import bgimg from "./assets/brand.png";

const MyNavbar = () => {
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <Navbar className="nav" bg="white" href="#home" position="fixed">
      <div>
        <a href="#">
          <img src={bgimg} alt="" width={250} height={70} />
        </a>{" "}
      </div>

      <ul>
        <li className="bars">
          <a href="#">Home</a>
        </li>
        <li className="bars">
          <a href="#">About</a>
        </li>
        <li className="bars">
          <a href="#">Programs</a>
        </li>
        <li className="bars">
          <a href="#">Blog</a>
        </li>
        <li className="bars">
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul>
        <div className="ico">
          <ul className="social">
            <a href="#" className="call">
              Call Us :{" "}
            </a>
            <a href="#" className="ca">
              0(78) 1234567
            </a>

            <a href="#" className="cal">
              |
            </a>
            <a
              className="Social-icon-facebook"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyour-website.com%2F&amp;src=sdkpreparse"
            >
              <FaFacebookSquare />{" "}
            </a>

            <a
              className="Social-icon-twitter"
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareTwitter />{" "}
            </a>

            <a
              className="Social-icon-linkedin"
              href="https://lk.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />{" "}
            </a>

            <a
              className="Social-icon-youtube"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutubeSquare />{" "}
            </a>

            <a
              className="Social-icon-mail"
              href="https://mail.google.com/mail"
              target="_blank"
              rel="noreferrer"
            >
              <IoMdMail />{" "}
            </a>

            <li className="menu-button">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </ul>
      <ul className="sidebar">
        <li>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default MyNavbar;
