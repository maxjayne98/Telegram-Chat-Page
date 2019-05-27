import React, {Component} from 'react';
import {Platform, StyleSheet, List,ListItem,FlatList, TextInput, Text, View,Image} from 'react-native';
import ClientMessage from './src/Components/ClientMessage';
import Header from './src/Components/Header';
import MessageList from './src/Components/MessageList';
console.disableYellowBox = true;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
      id: 0, 
      owner: "orphan"
    };
  }

  ShowResponse = (receivedMessage) =>{
    if(receivedMessage.content == "Hi" || receivedMessage.content == "HI" ||
       receivedMessage.content == "hi" || receivedMessage.content == "salam" ||
       receivedMessage.content == "Salam" ){
      this.setState({
        messageList: [...this.state.messageList.concat(), {content: "Hi Wellcome to digikala Telegram bot", id: receivedMessage.id, owner: "bot", Date:{ hour:new Date().getHours(), minute:new Date().getMinutes()}}],
        id: receivedMessage.id + 1
      });
    }
    else{
      this.setState({
        messageList: [...this.state.messageList.concat(), {content: "I didn't get that", id: receivedMessage.id, owner: "bot", Date:{ hour:new Date().getHours(), minute:new Date().getMinutes()}}],
        id: receivedMessage.id + 1
      });
    }
  }

  AddMessage=(newMessage)=>{
    if(newMessage.content !== ''){
      setTimeout(() =>{
      this.ShowResponse(newMessage)}
      , 2000);

      this.setState({
        messageList: this.state.messageList.concat([newMessage]),
        id: newMessage.id + 1
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <MessageList messageList={this.state.messageList}/>
        <ClientMessage   AddMessage={this.AddMessage} index={this.state.id}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});
