import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {

  handleFormProcess(){      
    this.props.view();
  }

  render() {
    return (
     <div className="dashboard-container">
        <div className="conversation-container">          
            <h2>Where do you want to start...</h2>
            <input className="conversation-input" type="tel" placeholder=""  name="age" /> 
             <button className="conversation-button" onClick={this.handleFormProcess.bind(this)}>Start</button>           
        </div>
       
     </div>
    );
  }
}

export default Dashboard;
