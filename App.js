import * as React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import ToDoListScreen from "./screens/ToDoListScreen";
import TaskScreen from "./screens/TaskScreen";

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ToDoListScreen:{screen:ToDoListScreen},
  TaskScreen:{screen:TaskScreen},
})

const AppContainer =  createAppContainer(switchNavigator);
