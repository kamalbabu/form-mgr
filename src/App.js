import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
// import Dashboard from './components/dashboard/Dashboard';
// import Form from './components/form/Form';
// import Transition from './components/transition/Transition';



class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     view: 'Dashboard',
  //     option: ''
  //   }
  // }

  // onNavigateToTransition(option) {
  //   this.setState({
  //     view: 'Transition',
  //     option: option
  //   })
  // }

  // onNavigateToForm() {
  //   console.log("hello");
  //   this.setState({
  //     view: 'Form',
  //   })
  // }

  // displayView() {
  //   if (this.state.view === 'Dashboard') {
  //     //return <Dashboard view={this.onNavigateToTransition.bind(this)} />
  //     return <Form mode='DETAILED' />
  //   }
  //   else if (this.state.view === 'Form') {
  //     return <Form mode={this.state.option} />
  //   }
  //   else if (this.state.view === 'Transition') {
  //     return <Transition view={this.onNavigateToForm.bind(this)} />
  //   }
  // }

  render() {
    return (
      <div className="app-container">
        {/* <div className="view-container">
            {this.displayView()}
          </div> */}
        <Navbar />

      </div>
    );
  }
}
export default App;
