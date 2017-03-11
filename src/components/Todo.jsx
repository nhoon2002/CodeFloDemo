import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: ""
        }

        this.checkTodo = this.checkTodo.bind(this);
        this.handleTask = this.handleTask.bind(this);
    }


    checkTodo(event) {
        this.setState({
            task: event.target.value
        })
    }

    handleTask(event) {

        var userTask = {
            task: this.state.task
        }

        this.props.postTodo(userTask);
    }

    render() {
        return <div>
            <form action="/friend-book/register" method="POST" className="form-signin">
                <div className="form-group">
                    {/* <label for="inputTodo" className="sr-only">Add To Do</label> */}
                    <input type="text" name="name" id="inputTodo" className="form-control" placeholder="Add a task" value={this.state.name}
                    onChange={this.checkTodo} />
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleTask}>Submit</button>
            </form>
        </div>;
    }
}

export default Todo;
