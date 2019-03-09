import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';

import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Transition from './components/transition/Transition';



class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      view:'Dashboard'
    }
  }
  
  onNavigateToTransition(){
    this.setState({
      view:'Transition'
    })
  }

  onNavigateToForm(){
    console.log("hello");
    this.setState({
      view:'Form'
    })
  }

  displayView(){
    if(this.state.view==='Dashboard'){
      return <Dashboard view={this.onNavigateToTransition.bind(this)} />
    }
    else if (this.state.view==='Form'){
      return <Form/>
    }
    else if(this.state.view==='Transition'){
      return <Transition view={this.onNavigateToForm.bind(this)}/>
    }    
  }

  render() {
    return (      
        <div>
          <AppBar position="static">
            <Toolbar className='toolbar'>
              <IconButton  color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <AccountCircle />
            </Toolbar>
          </AppBar>
          <div className="view-container">
            {this.displayView()}
          </div>
        </div>      
    );
  }
}
export default App;
