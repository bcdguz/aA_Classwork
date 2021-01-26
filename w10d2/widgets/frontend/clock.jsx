import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        // debugger
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }
    tick(){
        this.setState({time: new Date()});
    }
    componentDidMount(){
        let handle = setInterval(this.tick,1000);
    }
    componentWillUnmount(){
        clearInterval(handle);
        handle = 0;
    }
    render(){
        return (
            <>
                <h1>Clock</h1>
                <h2>{this.state.time.getHours()}:{this.state.time.getMinutes()}
                :{this.state.time.getSeconds()} {this.state.time.getTimezoneOffset()}</h2>
                <h2>{this.state.time.toDateString()}</h2>
            </>
        );
    }
}
export default Clock;