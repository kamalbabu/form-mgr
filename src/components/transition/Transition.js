import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './Transition.css';

class Transition extends Component {
  state = {
        completed: 0,
  };
  
  componentDidMount(){      
    this.timer = setInterval(this.progress, 100);   
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
      this.props.view();
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {    
    return (
     <div className="transition-container" >

        <div className="transition-logo">

        </div>       
        <div className="transition-details">
            <div className="transition-title">Please wait while we get your form ready...</div>    
            <div className="transition-progress">
                <LinearProgress color='primary' variant="determinate" value={this.state.completed} />
            </div>            
        </div>       
            
     </div>
    );
  }
}

export default Transition;
