import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    

    render() {
        const { tasks } = this.props;
        return (
            <div>
                {tasks.map((task, index) =>
                    <TaskItem 
                        task = {task}
                        index = {index}
                        toggleTaskStatus = {this.props.toggleTaskStatus}
                        deleteTask = {this.props.deleteTask}
                    />
                )}
            </div>
        );
    }
}

export default TaskList;