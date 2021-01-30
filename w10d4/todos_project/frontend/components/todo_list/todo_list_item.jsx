import React from 'react';

class TodoListItem extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            detail: false
        }
        this.handleDone = this.handleDone.bind(this);
    }
    // debugger

    handleDone(e) {
        e.preventDefault(); //{ title: props.todo.title, }
        let bool = true;
        if(this.props.todo.done) {
            bool = false;
        }
        const flipTodo = {      //recieveTodo needs a whole todo obj;
            title: this.props.todo.title,
            body: this.props.todo.body,
            id: this.props.todo.id,
            done: bool
        }
        this.props.recieveTodo(flipTodo);
    }

    handleDetail(e) {
        e.preventDefault();
        if (this.state.detail) {
            this.setState({ detail: false })
        } else {
            this.setState({ detail: true})
        }

        
    }
    render () {
        return (
            <>
                <li onClick={this.handleDetail}>
                    Title: {this.props.todo.title}
                </li>
                {/* write a conditional statement around this to render the TodoList */}
                <TodoList /> 
                <button onClick={this.handleDone}>Done</button>
            </>
        )
    }
}

export default TodoListItem;