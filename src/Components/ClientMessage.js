import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

class ClientMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
          {/* <View style={styles.inputContainer}> */}
            <Input 
                placeholder='Message' onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing = {() => {
                  this.props.AddMessage({content: this.state.text, id: this.props.id, owner:"client", 
                                         Date:{ hour:new Date().getHours(), minute:new Date().getMinutes()}});
                                         this.setState({text: ''})
                }}
                rightIcon ={<Button title='Send' onPress={() => {
                  this.props.AddMessage({content: this.state.text, id: this.props.id, owner:"client",
                                         Date:{ hour:new Date().getHours(), minute:new Date().getMinutes()}});
                                         this.setState({text: ''})
                  }
                }
                buttonStyle={styles.button}/>} />
          {/* </View> */}
      </View> 
    );
  }
}



const styles = StyleSheet.create({
  container:{ 
    height:60,
    flexDirection:'row', 
    justifyContent:'space-around',
    alignItems:'center'
  },
  inputContainer: {
     flex:1, 
     backgroundColor: 'rgb(239, 239, 245)', 
     borderRadius:20
  },
  button: {
    backgroundColor: "#83f442",
    borderRadius:50,
    justifyContent:'space-around', 
    alignItems:'center', 
    flexDirection:'row' 
  },
});

 export default ClientMessage;