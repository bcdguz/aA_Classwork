import React from 'react'
import { uniqueId } from '../../util/utils'
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            id: uniqueId(),
            title: '',
            body: '',
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }
    updateBody(e) {
        this.setState({ body: e.target.value })
    }
    updateDone(e) {
        let bool = false
        if (e.target.value === "true") {
            bool = true
        }
        this.setState({ done: bool })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state)
        this.setState({ id: uniqueId(), title: '', body: '', done: false})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title
                    <input onChange={this.updateTitle} type="text" value={this.state.title}/>
                </label>
                <label>Body
                    <input onChange={this.updateBody} type="text" value={this.state.body}/>
                </label>
                <label>Done?
                    <label>True
                        <input type="radio" name="done" value="true" onChange={this.updateDone}/>
                    </label>
                    <label>False
                        <input type="radio" name="done" value="false" onChange={this.updateDone}/>
                    </label>
                </label>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;