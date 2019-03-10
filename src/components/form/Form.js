import React, { Component } from 'react';
import './Form.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tab from '@material-ui/core/Tab';
import botLogo from './logo/botlogo.png'
import userImg from './logo/userimage.jpg';
import formMockData from './../../mocks/form';


function Category(props) {
  return (
    <div className="category-container" style={{ width: props.width }} >
      <Tab label={props.item.title} style={{ width: props.width }} />
      <LinearProgress className="progress-elem" variant="determinate" value={props.item.progress} />
    </div>
  );
}

class Form extends Component {
  state = {
    form: formMockData,
    conversation: [],
    lastIpVal: '',
    catIndex :0,
    queryIndex:0
  }

  componentDidMount(){
     this.initBot();
  }

  initBot(){
    let currentConversationState = this.state.conversation;
    let initialQuery = this.state.form.categories[this.state.catIndex].query[this.state.queryIndex];
    let botConversationElem = this.prepareBotConversation(initialQuery);
    let nextQueryIndex = this.state.queryIndex +1 ;

    currentConversationState.push(botConversationElem);
    this.setState({
      conversation: currentConversationState,
      lastIpVal: '',
      queryIndex:nextQueryIndex
    });
  }

  intiateBotResponse(){
    let currentConversationState = this.state.conversation;
    let initialQuery = this.state.form.categories[this.state.catIndex].query[this.state.queryIndex];
    let botConversationElem = this.prepareBotConversation(initialQuery);
    let nextQueryIndex = this.state.queryIndex +1;
    currentConversationState.push(botConversationElem);
    this.setState({
      conversation: currentConversationState,
      queryIndex:nextQueryIndex
    });
  }
  renderConversation() {
    return this.state.conversation;
  }
  prepareUserConversation(message) {
    let uniqueKey = this.state.conversation.length + 1;
    return (<UserConversation key={uniqueKey} item={message}></UserConversation>)
  }
  prepareBotConversation(conversation) {
    let uniqueKey = this.state.conversation.length + 1;
    return (<BotConversation key={uniqueKey} item={conversation}></BotConversation>)
  }

  handleUserInput(evt) {
    this.setState({
      lastIpVal: evt.target.value
    });
  }

  handleInputKeyPress(evt) {
    let currentConversationState = this.state.conversation;
    let userMsgElem;
    if (evt.key === 'Enter' && evt.target.value !== '') {
      userMsgElem = this.prepareUserConversation(evt.target.value);
      currentConversationState.push(userMsgElem);
      this.setState({
        conversation: currentConversationState,
        lastIpVal: ''
      });
      this.intiateBotResponse();
    }
  }
  render() {
    return (
      <div className="form-container">
        {/* <div className="category-area">
            {this.renderCategrories()}
        </div> */}
        <div className="content-area">
          <div className="form-preview-area">test
            </div>
          <div className="conversation-area">
            <div className="conversation-content">
              {this.renderConversation()}
              {/* <BotConversation item={this.state.messages}></BotConversation>
                   <BotConversation item={this.state.messages}></BotConversation>
                   <UserConversation item={this.state.messages}></UserConversation>
                   <UserConversation item={this.state.messages}></UserConversation> */}
            </div>
            <input type="text" className="conversation-k-input" 
                    value={this.state.lastIpVal} 
                    onChange={this.handleUserInput.bind(this)}
                    onKeyPress={this.handleInputKeyPress.bind(this)} />
            <button onClick={this.handleUserInput.bind(this)}> Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

function BotConversation(props) {
  return (
    <div className="bot-conversation-container">
      <img className="message-author-avatar" src={botLogo} />
      <div className="message-box">{props.item.question}</div>
      <div className="option-container">
          <div className="option-elem">445 Mount Eden Road, Mount Eden, Auckland.</div>
          <div className="option-elem">445 Mount Eden Road, Mount Eden, Auckland.</div>
          
      </div>
    </div>
  );
}


function UserConversation(props) {
  return (
    <div className="user-conversation-container">
      <img className="message-author-avatar user-avatar" src={userImg} />
      <div className="message-box user-message">{props.item}</div>   
    </div>
  );
}
