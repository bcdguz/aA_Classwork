import React from 'react';
import { TodoDetailView } from './todo_detail_view';
import TodoDetailViewContainer from './todo_detail_view_container'

class TodoListItem extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            detail: false
        }
        this.handleDone = this.handleDone.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
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
        this.props.receiveTodo(flipTodo);
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
        let todoDetail = <div></div>
        if (this.state.detail) {
            todoDetail = <TodoDetailViewContainer todo = {this.props.todo}/>
        }

        return (
            <>
                <li onClick={this.handleDetail}>
                    Title: {this.props.todo.title}
                </li>
                {todoDetail}
                
                <button onClick={this.handleDone}>Done</button>
            </>
        )
    }
}

export default TodoListItem;