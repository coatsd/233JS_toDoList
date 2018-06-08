import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "",
            isComplete: false
        }
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    inputUpdated(event) {
        const {value} = event.target;
        this.setState({desc: value});
    }

    submitTask (event) {
        event.preventDefault();
        const { task } = this.state;
        const { addTask } = this.props;
        addTask(task);
        this.setState( {task : ""} );
    }

    render() {
        return (
            <div className="row input-area">
                <form onSubmit={this.submitTask}>
                    <div className="col-md-1">
                        <label htmlFor="task">Task:</label>
                    </div>
                    <div className="form-group col-md-10">
                        <input className="form-control"
                            type="input" name="task" 
                            value={this.state.task}
                            onInput={this.inputUpdated}
                        />
                    </div>
                    <div className="form-group col-md-1">
                        <button type="submit" className="btn btn-success"> Add Task </button>
                    </div>
                    <div className="col-md-1"></div>
                </form>
            </div>
        );
    }
}

export default TaskForm;