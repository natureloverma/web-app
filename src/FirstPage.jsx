import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function FirstPage() {
  return (
    <section
      className="cont"
      style={{
        color: "red",
        justifyItems: "left",
        backgroundImage: 'url("/src/assets/blue.webp")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        //test commit
      }}
    >
      {/* <div>
        <FullScreenPage />
      </div> */}
      <div
        className="form"
        style={{
          textAlign: "left",
          width: "50%",
          height: "100%",
        }}
      >
        <h3>EDUCATION & SCHOOL</h3>
        <h1>SHOWCASE COURSES, EVENTS AND MORE!</h1>
        <h4>This is the first web page. So this is the example page. </h4>
        <Button
          style={{
            backgroundColor: "green",
            border: "none",
            borderRadius: "0%",
          }}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
}

export default FirstPage;
