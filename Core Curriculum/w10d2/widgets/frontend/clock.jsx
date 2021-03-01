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
                <div className="time">
                    <div>
                        <h2>Time</h2>
                        <h2>Date</h2>
                        
                    </div>
                    <div>
                        <h2>{this.state.time.getHours()}:{this.state.time.getMinutes()}
                        :{this.state.time.getSeconds()} PDT</h2>
                        <h2>{this.state.time.toDateString()}</h2>
                    </div>
                    
                </div>
            </>
        );
    }
}
export default Clock;