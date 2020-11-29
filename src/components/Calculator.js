import React, {Component} from 'react'


class Calculator extends Component {

    state = {
        count: 0,
        num1: 0,
        num2: 0,
        operation: ''
    }

    updateNum1 = (event) => {
        console.log('UPDATE num1 to', event.target.value)
        

        this.setState({
            num1: event.target.value
        })
    }

    updateNum2 = (event) => {
        console.log('UPDATE num1 to', event.target.value)

        this.setState({
            num2: event.target.value
        })
    }

    //set operator to be used
    operator = (event) => {
        event.preventDefault()
        console.log('ADD FUNCTION FIRED')
        console.log('SET OPERATION TO --->',event.target.innerHTML)

        this.setState({
            operation: event.target.innerHTML
        })
    }

    //process mathematical operation
    mathOperation = (event) => {
        event.preventDefault()
        console.log('OPERATOR FIRED --->', this)

        if (this.state.operation === '+') {
            this.setState({
                count: parseInt(this.state.num1) + parseInt(this.state.num2)
            })
        } else if (this.state.operation === '-') {
            this.setState({
                count: parseInt(this.state.num1) - parseInt(this.state.num2)
            })
        } else if (this.state.operation === '*') {
            this.setState({
                count: parseInt(this.state.num1) * parseInt(this.state.num2)
            })
        } else if (this.state.operation === '/') {
            this.setState({
                count: parseInt(this.state.num1) / parseInt(this.state.num2)
            })
        }
    }
    
    //reset form
    reset = (event) => {
        /*this.setState({
            count: 0,
            num1: 0,
            num2: 0,
            operation: ''
        })*/

        this.form.reset()
    }

    render(){

        return (
            <div className='container'>
                <h1>Add with React!</h1>

                <form id='calculator'>
                    <input id='num1' type='text' 
                        placeholder='0'
                        onChange={(event) => this.updateNum1(event)}
                    />
                    
                    <button onClick={this.operator}>+</button>
                    <button onClick={this.operator}>-</button>
                    <button onClick={this.operator}>*</button>
                    <button onClick={this.operator}>/</button>

                    <input id='num2' type='text' 
                        placeholder='0'
                        onChange={(event) => this.updateNum2(event)}
                    />

                    <button onClick={this.mathOperation}> = </button>
                    
                    <h3>{this.state.count}</h3>

                    <button onClick={this.reset}>Clear</button>
                    
                </form>
                

            </div>
        )
    }
  }
  
  export default Calculator;