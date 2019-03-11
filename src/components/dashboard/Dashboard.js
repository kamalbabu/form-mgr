import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.handleFormProcess=this.handleFormProcess.bind(this)
  }
  handleFormProcess(option) {
    this.props.view(option);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="conversation-container">
          <div className="welcome-title">Please paste from url or upload to begin...</div>
          <div className="ip-container">
            <span className="ip-separator">|</span>
            <input className="conversation-input" type="tel" placeholder="https://example.abc.com/sampleform" name="form" />
            <i className="material-icons ico-uload">cloud_upload</i>
          </div>

          <div className="btn-container">
            <button className="conversation-button" onClick={()=>this.handleFormProcess('QUICK')}>Quick Fill</button>
            <button className="conversation-button" onClick={()=>this.handleFormProcess('DETAIL')}>Detailed Fill</button>
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
