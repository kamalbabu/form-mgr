import React, { Component } from 'react';
import './Form.css';

const formData={

}

class Form extends Component {
  render() {
    return (
    <div className="form-container">
        <div className="conversational-form">
            <div className="conversation-area">

            </div>
            <textarea className="conversation-input-area" type="input" tabindex="1" rows="1" data-value="" placeholder="Type your answer here ..." ></textarea>
        </div>
    </div>
    );
  }
}

export default Form;
