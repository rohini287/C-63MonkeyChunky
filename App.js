
import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:'',
      displayText:''
    }
  }
  render(){
    return (
      <SafeAreaProvider style={styles.container}>
       <Header backgroundColor={'blue'} 
        centerComponent={{
        text:'Monkey Chunky App',
        style:{color:'yellow',fontSize:20}
        }} ></Header>
        <TextInput style={styles.inputBox}
        onChangeText={text=>{
          this.setState({
            text:text
          })
        }} value={this.state.text}/>
        <TouchableOpacity style={styles.go} onPress={()=>{
          this.setState({
            displayText:this.state.text
          })
        }}><Text style={{textAlign:'center',fontSize:25,padding:10,fontWeight:'bold'}}> GO</Text></TouchableOpacity>
        <Text style={{fontSize:30,textAlign:'center'}}>{this.state.displayText}</Text>
    
      </SafeAreaProvider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:1000,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    marginTop:200,
    width:200,
    alignSelf:'center',
    textAlign:'center',
    borderWidth:3
  },
  go:{
     width:100,
     borderRadius:20,
     height:50,
     margin:10,
     backgroundColor:'orange',
     alignSelf:'center',
     
  }
});
