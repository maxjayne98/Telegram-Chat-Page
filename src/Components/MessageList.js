import React, {Component} from 'react';
import {Platform, StyleSheet, List,ListItem,FlatList, TextInput, Text, View,Image} from 'react-native';

class MessageList extends React.Component{
    render(){
        return(
        <View style={styles.container}>
            <FlatList
                
                contentContainerStyle={{flex:1, justifyContent: 'flex-end',alignItems:'flex-start'}}
                data={this.props.messageList}
                renderItem={({item}) =><View style={(item.owner == 'client' )? styles.clientMessage : styles.contactMessage}>
                                            <Text style={styles.messageContent} >{item.content}</Text>
                                            <View style={styles.timeContainer}>
                                                <Text style={styles.time} >{item.Date.hour}:{item.Date.minute}</Text>
                                            </View>
                                        </View>           
                            }            
                keyExtractor={(item, index) => {return item.id;}}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 7,
        alignItems:'flex-end',
        backgroundColor: 'gray'
    },
    clientMessage:{
        minHeight:40,
        maxWidth:150,
        borderRadius:10, 
        minWidth:150, 
        marginBottom:7, 
        marginRight:3,
        backgroundColor:"white"
    },
    contactMessage:{
        minHeight:40,
        maxWidth:150,
        borderRadius:10, 
        minWidth:150, 
        marginBottom:7, 
        marginRight:3,
        backgroundColor:'#83f442'
    },

    messageContent:{ 
        fontSize:15,
        marginRight:3,
        marginLeft:3,
        marginTop:3,
        marginBottom:3
    },
    time:{
        fontSize:10,
        marginRight:5,
    },
    timeContainer:{
        alignItems:'flex-end'
    },
});

export default MessageList;