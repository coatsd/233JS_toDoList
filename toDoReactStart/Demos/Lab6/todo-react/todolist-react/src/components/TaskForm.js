import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "",
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
        const { desc } = this.state;
        const { addTask } = this.props;
        addTask(desc);
        this.setState( {desc : ""} );
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
                            value={this.state.desc}
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