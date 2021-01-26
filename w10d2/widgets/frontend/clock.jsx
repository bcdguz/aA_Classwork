import React from 'react';

class Clock extends React.Component {
    constructor(){
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }
    tick(){
        this.setState({time: new Date()});
    }
    componentDidMount(){
        setInterval(this.tick,1000);
    }
    render(){
        return (<h1>Clock</h1>);
    }
}
export default Clock;