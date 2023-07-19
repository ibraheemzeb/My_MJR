import React from "react";
import NavBar from "../NavBar/NavBar";

const TestComponent = () => {
    return(
        <header>
  <div className="header">
    <nav className="navigation">
      <a href="#" className="navbar-logo">Logo</a>
      <div className="navbar-right">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    {/* <NavBar /> */}
    <div className="video-container">
      <video autoPlay loop muted id="video-bg">
        <source src="http://bigcom.com/assets/2014/08/iChooseB.mp4" type="video/mp4" />
        </video>
    </div>
  </div>
</header>
    )
    }

export default TestComponent;