import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
  }

  setNum1(e){
    e.preventDefault();
    this.setState({num1: e.target.value});
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} type="text"/>
      </div>
    );
  }
}

export default Calculator;
