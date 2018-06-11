import React, { Component } from 'react';

class TaskItem extends Component{

    onDeleteClick(event){
        event.preventDefault();
        const deleteTask = this.props.deleteTask;
        deleteTask(this.props.index);
    }

    onChange(event){
        const onChange = this.props.toggleTaskStatus;
        onChange(this.props.index);
    }

    render() {
        const task = this.props.task;
        const onChange = this.onChange.bind(this);
        const onDeleteClick = this.onDeleteClick.bind(this);
        const taskClassName = (task.isComplete) ?
        'col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text complete' :
        'col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text';
        return(
            <li className="list-group-item checkbox">
                <div className="row">
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                            <label>
                                <input id={this.props.index} type="checkbox" value="" 
                                className="checkbox" checked={task.isComplete}
                                onChange={onChange}/>
                            </label>
                    </div>
                    <div className={taskClassName}>
                        {task.desc}
                    </div>
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                        <a href="/" onClick={onDeleteClick}>
                            <i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i>
                        </a>
                    </div>
                </div>
            </li>
        );
    }
}

export default TaskItem;