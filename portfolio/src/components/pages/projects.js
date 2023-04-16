import React, { useState } from "react";
import "./projects.css";
import WhatsForDinner from "../assets/Whats-for-dinner.png";
import ChatBox from "../assets/Chatbox.png";
import SocialNetwork from "../assets/social-network-apis.jpeg";

const ProjectWrap = () => {
  const [opacity, setOpacity] = useState(0);
  const [whatsForDinnerOpacity, setWhatsForDinnerOpacity] = useState(0);
  const [SocialNetworkOpacity, setSocialNetworkOpacity] = useState(0);

  const handleMouseOver = () => {
    setOpacity(1);
  };

  const handleWhatsForDinnerMouseOver = () => {
    setWhatsForDinnerOpacity(1);
  };

  const handleSocialNetworkOver = () => {
    setSocialNetworkOpacity(1);
  };

  return (
    <div className="project-wrap">
      <div className="chat-box-container">
        <img
          className="chat-box"
          src={ChatBox}
          alt="ChatBox"
          onMouseOver={handleMouseOver}
        />
        <div className="chat-box-text-container" style={{ opacity: opacity }}>
          <h2 className="chat-box-text">
            {" "}
            <a
              className="chat-box-link"
              href="https://open-chat-box.herokuapp.com/"
              target="https://open-chat-box.herokuapp.com/"
            >
              Open Chat Box{" "}
            </a>{" "}
            is a full stack platform that allows users to create and join chat
            rooms for real-time communication with other users. The website
            provides a simple and easy-to-use interface for creating and
            managing chat rooms, as well as joining existing chat rooms created
            by other users. Users are able to create an account and login onto
            the platform for usernames to be displayed.{" "}
          </h2>
        </div>
      </div>
      <div className="whats-for-dinner-container">
        <img
          className="whats-for-dinner"
          src={WhatsForDinner}
          alt="Whats For Dinner"
          onMouseOver={handleWhatsForDinnerMouseOver}
        />
        <div
          className="whats-for-dinner-text-container"
          style={{ opacity: whatsForDinnerOpacity }}
        >
          <h2 className="whats-for-dinner-text">
            <a
              class="chat-box-link"
              href="https://ws538.github.io/Whats-for-Dinner/"
              target="https://ws538.github.io/Whats-for-Dinner/"
            >
              Whats-For-Dinner
            </a>{" "}
            is a web-based application that helps users decide what to eat by
            guiding them through a series of questions and generating recipe
            suggestions based on their preferences and dietary needs. The
            website features a wide range of recipe options, including "Couch
            Potato" or "Healthy" meals, with detailed instructions and nutrition
            information. Users can save their favorite recipes for future
            reference and explore new and exciting culinary creations.
          </h2>
        </div>
      </div>
      <div className="social-network-container">
        <img
          className="social-network"
          src={SocialNetwork}
          alt="SocialNetwork"
          onMouseOver={handleSocialNetworkOver}
        />
        <div
          className="whats-for-dinner-text-container"
          style={{ opacity: SocialNetworkOpacity }}
        >
          <h2 className="whats-for-dinner-text">
            <a
              class="chat-box-link"
              href="https://github.com/Ws538/SocialNetworkAPI"
              target="https://github.com/Ws538/SocialNetworkAPI"
            >
              SocialNetworkAPI
            </a>{" "}
            is a RESTful API backend for a social media platform, designed to
            handle user interactions such as creating and managing user
            profiles, adding friends, and posting, updating, and deleting
            thoughts and reactions. Built with Node.js, Express, and MongoDB,
            this scalable and efficient backend application supports a wide
            range of features to power a full-fledged social media experience.
            With its well-structured code and comprehensive API documentation,
            SocialNetworkAPI can be easily integrated with various frontend
            frameworks to create a complete social networking solution.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ProjectWrap;
