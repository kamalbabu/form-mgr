import React, { Component } from 'react';
import userImg from './img/userimage.jpg';
import './Conversation.css';
function UserConversation(props) {
    return (
      <div className="user-conversation-container">
        <img className="message-author-avatar user-avatar" src={userImg} />
        <div className="message-box user-message user-msg">{props.item}</div>   
      </div>
    );
  }

  
  export default UserConversation;