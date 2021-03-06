import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let tasks = JSON.parse(localStorage.getItem('TASKS'));
    if(!tasks) {
      tasks = [
        {desc: 'Test Task 1', isComplete: false},
      ];
    }  
    this.state = { 
      tasks: tasks
    }

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  
  toggleTaskStatus(taskIndex) {
    console.log("toggleTaskStatus");
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));   
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    this.setState({
      tasks: tasks
    });
  }

  deleteTask(taskIndex) {
    console.log("deleteTask");
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks.splice(taskIndex, 1);
    this.setState({
      tasks: tasks
    });
  }

  addTask(desc) {
    console.log("addTask");
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    let newTask = {
      desc,
      isComplete: false,
    }; 
    tasks.push(newTask);
    this.setState({
      tasks: tasks
    });
  }

  render() {
    localStorage.setItem('TASKS', JSON.stringify(this.state.tasks));

    return (
      <div>
        <TaskForm addTask = {this.addTask} />
        <TaskList tasks = {this.state.tasks} 
                  toggleTaskStatus = {this.toggleTaskStatus}
                  deleteTask = {this.deleteTask}
                  />
      </div>
    );
  }
}

export default App;
