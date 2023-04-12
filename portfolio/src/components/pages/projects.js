import React from "react";
import './projects.css'
import WhatsForDinner from '../assets/Whats-for-dinner.png'
import ChatBox from '../assets/Chatbox.png'
import SocialNetwork from '../assets/social-network-apis.jpeg'

export default function projects() {


  return (
    <div>
    <div className="chat-box-container">
        <img className="chat-box" src={ChatBox} alt="ChatBox" />
    </div>
      <div className="whats-for-dinner-container">
        <img className="whats-for-dinner" src={WhatsForDinner} alt="Whats For Dinner"/>
      </div>
      <div className="social-network-container">
        <img className="social-network" src={SocialNetwork} alt="SocialNetwork" />
      </div>
      
    </div>
  )

}