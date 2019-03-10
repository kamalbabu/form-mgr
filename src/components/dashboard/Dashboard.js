import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {

  handleFormProcess() {
    this.props.view();
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="conversation-container">
          <div className="welcome-title">Please paste from url or upload to begin...</div>
          <div className="ip-container">
            <span className="ip-separator">|</span>
            <input className="conversation-input" type="tel" placeholder="https://example.abc.com/sampleform" name="form" />
          </div>

          <div className="btn-container">
            <button className="conversation-button" onClick={this.handleFormProcess.bind(this)}>Quick Fill</button>
            <button className="conversation-button" onClick={this.handleFormProcess.bind(this)}>Detailed Fill</button>
          </div>
          <div className="recent-form-container">
          <div className="recent-title">Start from recent forms</div>
        </div>
        </div>
       
      </div>
    );
  }
}

export default Dashboard;
