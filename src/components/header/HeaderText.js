import React from "react";
// import Button from "react-bootstrap/Button";
// import { Container } from "react-bootstrap";

const HeaderText = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: -2,
        }}
      >
        <div
          className="bg-video-wrap"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          {/* <img
            src={bgimg}
            alt="bg-img"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          /> */}
          <video src="mjr.mp4" loop muted autoPlay />
        </div>
      </div>
      <div
        className="content"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -80%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "48px" }}
        >
          Welcome to My
        </h1>
        <h1
          style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "48px" }}
        >
          Portfolio Page.
        </h1>
      </div>
    </div>
  );
};

export default HeaderText;
