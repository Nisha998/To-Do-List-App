import React,{useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet,Alert,SafeAreaView} from 'react-native';
//import {firebase} from '@firebase/firestore';
import db from '../config';
import firebase from 'firebase';
import DatePicker from 'react-native-datepicker';
//import Datepicker from "react-datepicker";
//import Datepicker from "react-day-picker";

export default class ToDoListScreen extends React.Component {
  constructor(){
    super();
    this.state={
     userId : firebase.auth().currentUser.email,
     taskDescription:"",
     time:"",
     date:""
    }
   // const [date, setDate] = useState('24-12-2021');
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

addTask = async (taskDescription,time,date)=>{
  
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('tasks').add({
        "user_id": userId,
        "task_Description":taskDescription,
        "Date":date,
        "Time"  : time,
        "task_status" : "inProgress",
        

    })

 this.setState({
        taskDescription :'',
        date : '',
        time:'',
        requestId: randomRequestId
    })

    return Alert.alert("Task Added Successfully")


  }

  componentDidMount(){
    this.addTask();
    
  }
  render(){
    
      return(
        
        <View style={styles.container}>
      
          
        <View style={styles.inputView}>
        <Text style={{textAlign:'center', fontSize:50,}}>To Do List</Text>
        <TextInput
          style={styles.inputBox}
           multiline
          //numberOfLines ={8}
          placeholder={"Task Description"}
          onChangeText={(text)=>{
                    this.setState({
                        taskDescription:text
                    })
                }}
                value={this.state.taskDescription}
          />
        
        <TextInput
          style={styles.inputBox}
          placeholder="Time"
          onChangeText={(text)=>{
                    this.setState({
                        time:text
                    })
                }}
                value={this.state.time}
          />
        
        <SafeAreaView >
      <View style={styles.inputView}>
      
       <DatePicker
          style={styles.datePickerStyle}
         
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            this.setDate(date);
          }}
          value={this.state.date}
        />
      </View>
    </SafeAreaView>

        </View>
        


       
        <Text style={styles.transactionAlert}></Text>

        <TouchableOpacity
          style={styles.submitButton}
          
            onPress={()=>{ this.addTask(this.state.taskDescription,this.state.date,this.state.time);
          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.submitButton}
          onPress={async()=>{
            
          }}>
          <Text style={styles.submitButtonText}>Update</Text>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          
            onPress={()=>{ 
          }}>
          <Text style={styles.submitButtonText}>Delete</Text>
          
        </TouchableOpacity>
      </View>
      )
    }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 /* displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },*/
  
  inputView:{
    flexDirection: 'vertical',
    margin: 50
  },

  inputBox:{
    width: 250,
    borderWidth: 1,
    borderColor:'blue',
    padding:8,
    margin:30,
    fontSize:20
  },
  
  submitButton:{
    width: 300,
    height: 50,
    margin:10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  },
   datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
