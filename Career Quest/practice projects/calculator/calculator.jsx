import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {num1: "", num2: "", result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.handleOperation= this.handleOperation.bind(this);
  }

  setNum1(e){
    e.preventDefault();
    this.setState({num1: e.target.value});
  }

  setNum2(e){
    e.preventDefault();
    this.setState({num2: e.target.value});
  }

  clearFields(e){
    e.preventDefault();
    this.setState({num1: "", num2: ""});
  }

  handleOperation(e){
    e.preventDefault;
    const operation = e.currentTarget.innerText;
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    let result;
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "/") {
      result = num1 / num2;
    } else {
      result = num1 * num2;
    }
    this.setState({result})
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} type="text" value={this.state.num1}/>
        <input onChange={this.setNum2} type="text" value={this.state.num2} />
        <div className="operations">
          <button onClick={this.handleOperation}>+</button>
          <button onClick={this.handleOperation}>-</button>
          <button onClick={this.handleOperation}>/</button>
          <button onClick={this.handleOperation}>*</button>
        </div>
        <button onClick={this.clearFields}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
