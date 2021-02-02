import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', body: ''};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) { //removing step
        event.preventDefault();
        this.props.removeStep(this.props.step.id)
    }

    render() {
        return (
            <div>
                <li>Title: {this.props.step.title}</li>
                <li>Body: {this.props.step.body}</li>
                <button onClick={this.handleClick}>Delete Step</button>
            </div>
        )
    }
}

export default StepListItem