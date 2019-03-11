import React, { Component } from 'react';
import botLogo from './img/botlogo.png'
import './Conversation.css';
  
class BotConversation extends Component {
  state={
    output:''
  }

   renderOptionMessage(){
    let msgElm=[];
    if(this.props.item.options.title!==undefined){
      msgElm.push(<div>{this.props.item.options.title}</div>);
    }
     return(<div>{msgElm}</div>);
   }
   setInput(option){
    console.log(option);
    this.props.onOption(option)
   }
   renderOption(){
     if(this.props.item.options.title!==undefined){
       let optionElem = [];
       for(let choice in this.props.item.options.choice){
            optionElem.push(<ConverstionOption key={choice+1}  onChoice={this.setInput.bind(this)} option={this.props.item.options.choice[choice]}/>);
       }
       return(<div className="option-container">
                {optionElem}
                </div>
       );
     }
   }
    render() {
        return (
            <div className="bot-conversation-container">
              <img className="message-author-avatar" src={botLogo} />
              <div className="message-box">{this.props.item.question}
                {this.renderOptionMessage()}
              </div>
              {this.renderOption()}
            </div>
          );
    }
  }
  export default BotConversation;


  function ConverstionOption(props){    
        function handleOptionSelection(){
              props.onChoice(props.option)
        }
        return ( <div className="option-elem" key={Math.random()} onClick={handleOptionSelection}  >{props.option}</div>);
  }