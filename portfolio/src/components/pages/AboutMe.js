import React, { useState } from "react";
import './AboutMe.css'

export default function AboutMe() {

  const [textVisible , setTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisible(!textVisible)
  };

  return (
    <div>
      <div>
        <h1 id="aboutMe"> About Me </h1>
      </div>
      <div className="about-me-container">
        <h2 id="about-me-text"> Hi there! So you have reached my portfolio, i suppose this is where i
        tell my story. Once upon a time
        <button className="continueButton" onClick={toggleTextVisibility}>. . .</button></h2>
      </div>
      <div className={`appearing-text-container ${textVisible ? "visible" : ""}`}>
      <h2 id="appearing-text">
        Just kidding, i woudn't do that to you :D I'm a full stack web developer
        with a passion for creating unique and interactive experiences. Although
        I originally came from a medical science background, I made the leap
        towards coding and found my interest in web development. I enjoy using
        my skills to bring websites to life and create engaging user
        experiences. Whether it's front-end design or back-end development, I'm
        always eager to learn and expand my skill set to stay up-to-date with
        the latest trends and technologies in the industry. Check out some of my
        projects!
      </h2>
      </div>
    </div>
  );
}
