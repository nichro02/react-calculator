import React, {Component} from 'react'


class Calculator extends Component {

    state = {
        count: 0,
        num1: 0,
        num2: 0
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

    add = (event) => {
        event.preventDefault()
        console.log('ADD FUNCTION FIRED')

        this.setState({
            count: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }

    render(){
        

        return (
            <div className='container'>
                <h1>Add with React!</h1>

                <div className='add'>
                    <input type='text' 
                        placeholder='0'
                        onChange={(event) => this.updateNum1(event)}
                    />
                    
                    <button onClick={this.add}> + </button>

                    <input type='text' 
                        placeholder='0'
                        onChange={(event) => this.updateNum2(event)}
                    />

                    <span> = </span>

                    <h3>{this.state.count}</h3>
                </div>
            </div>
      )
    }
  }
  
  export default Calculator;