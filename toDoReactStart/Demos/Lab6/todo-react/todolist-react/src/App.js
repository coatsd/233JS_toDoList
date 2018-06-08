import React, { Component } from 'react';
import logo from './logo.svg';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {desc: "First Test Task", isComplete: false}
      ]

    }
  }

  render() {
    return (
      <div>
        <TaskForm />
        <TaskList tasks = {this.state.tasks} />
      </div>
    );
  }
}

export default App;
