import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  Button
} from 'react-native';
import ToDoListScreen from "./ToDoListScreen";

export default class TaskScreen extends Component {
  displayInfo=()=>{
    Alert.alert("*Establish a daily habit."+"\n"+"**Each morning ,take a few minutes to clear your mind and plan your day."+"\n"+"***Decide what you can do today and postpone the rest for later."+"\n"+"****Set priorities and start with your most important task first.");
  }

  gotoTodoListScreen=()=>{
    this.props.navigation.navigate("ToDoListScreen");
  }
  render() {
    return (
      <View style={styles.container}>
        <Button color="blue" title="Click me " onPress={this.displayInfo}/>
          <Image
            source={require('../images/thinking.jpg')}
            style={{ width: 200, height: 200 }}
          />

          <View>
         <TouchableOpacity
          style={[styles.button, { backgroundColor: "teal"}]}
          onPress={this.gotoTodoListScreen}>
          <Text
            style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
            +ADD TASK
          </Text>
        </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 200,
    marginTop: 100,
    borderRadius: 80,
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingHorizontal: 15,
  },
});
