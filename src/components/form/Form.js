import React, { Component } from 'react';
import './Form.css';
import formMockData from './../../mocks/form';
import BotConversation from './conversation/BotConversation';
import UserConversation from './conversation/UserConversation';
import Preview from './preview/Preview';
const previewCategoryData1 = [{
  entity: 'Name',
  value: ''
}, {
  entity: 'Date of Birth',
  value: ''
}, {
  entity: 'Address',
  value: ''
},{
  entity:'Email',
  value:''
}];

const DETAILED_INIT_1 = 'You have selected an option for a detailed form filling option. We will not be storing any information . You can still opt for a quicker way. Let us get started';
class Form extends Component {
  state = {
    form: formMockData,
    conversation: [],
    lastIpVal: '',
    catIndex: 0,
    queryIndex: 0,
    currentEntity:'',
    formData:previewCategoryData1
  }

  componentDidMount() {
    console.log(this.props.mode)
    this.initializeDetailMode();
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  checkMode(){
    if(this.props.mode==='QUICK'){

    }if(this.props.mode==='DETAIL'){

    }
  }
  initializeQuickMode(){

  }
  initializeDetailMode() {
    
    let currentConversationState = this.state.conversation;

    let welcome1={
      entity:'Welcome',
      question:DETAILED_INIT_1,
      options:{}
    }

    let detailedWelcome1 = this.prepareBotConversation(welcome1);
     
    currentConversationState.push(detailedWelcome1);
    let initialQuery = this.state.form.categories[this.state.catIndex].query[this.state.queryIndex];
    let botConversationElem = this.prepareBotConversation(initialQuery);
    let nextQueryIndex = this.state.queryIndex + 1;

    currentConversationState.push(botConversationElem);
    this.setState({
      conversation: currentConversationState,
      lastIpVal: '',
      queryIndex: nextQueryIndex,
      currentEntity:this.state.form.categories[this.state.catIndex].query[this.state.queryIndex]['entity']
    });
  }
  
  intiateBotResponse() {
    let currentConversationState = this.state.conversation;
    let initialQuery = this.state.form.categories[this.state.catIndex].query[this.state.queryIndex];
    let botConversationElem = this.prepareBotConversation(initialQuery);
    let nextQueryIndex = this.state.queryIndex + 1;
    currentConversationState.push(botConversationElem);
    this.setState({
      conversation: currentConversationState,
      queryIndex: nextQueryIndex,
      currentEntity:this.state.form.categories[this.state.catIndex].query[this.state.queryIndex]['entity']
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
    return (<BotConversation key={uniqueKey} onOption={this.handleBotchoice.bind(this)} item={conversation}></BotConversation>)
  }

  handleUserInput(evt) {
    this.setState({
      lastIpVal: evt.target.value
    });
  }

  handleBotchoice(option){
    let currentConversationState = this.state.conversation;
    let userConversationElem = this.prepareUserConversation(option);
    let nextQueryIndex = this.state.queryIndex + 1;
    currentConversationState.push(userConversationElem);
    let formData = this.updateFormData(this.state.currentEntity,option);
    this.setState({
      conversation: currentConversationState,
      queryIndex: nextQueryIndex
    });
    this.intiateBotResponse()
  }
  
  handleInputKeyPress(evt) {
    let currentConversationState = this.state.conversation;
    let userMsgElem;
    if (evt.key === 'Enter' && evt.target.value !== '') {
      userMsgElem = this.prepareUserConversation(evt.target.value);
      let formData = this.updateFormData(this.state.currentEntity,evt.target.value);
      currentConversationState.push(userMsgElem);
      this.setState({
        conversation: currentConversationState,
        lastIpVal: '',
        formData:formData
      });
      this.intiateBotResponse();
    }
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollTop =  this.messagesEnd.scrollHeight;
  }

  updateFormData(entity,value){
    console.log(entity);
    let formData = this.state.formData;

    for(let index in formData){
      if(formData[index]["entity"]===entity){
        formData[index]["value"] = value;
      }
    }
    return formData;
  }

  render() {
    return (
      <div className="form-container">
        <div className="content-area">
          <div className="form-preview-area">
              <Preview data={this.state.formData}/>
            </div>
          <div className="conversation-area">
            <div className="conversation-content" id="convelem"
                   ref={(el) => { this.messagesEnd = el; }}>
              {this.renderConversation()}
            </div>
            <div className="input-elm-container">
              <input type="text" className="conversation-k-input"
                value={this.state.lastIpVal}
                onChange={this.handleUserInput.bind(this)}
                onKeyPress={this.handleInputKeyPress.bind(this)} />
              <i className="material-icons k-icon">send</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
