import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'
import ComplexBarChart from './ComplexBarChart'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }


  }
  componentDidUpdate() {
    console.log('updated', this.state)
  }

  randomDataFire = () => {
    let dataArray = []
    for (var i = 0; i < 20; i++) {

      dataArray.push(Math.floor(Math.random() * 10) + 1)

    }
    this.setState({ data: dataArray })
  }

  fizzBuzz = () => {

    var output;
    for (var i = 1; i <= 100; i++) {
      output = '';
      if (i % 3 === 0) {
        output += 'Fizz';
      }
      if (i % 5 === 0) {
        output += 'Buzz';
      }
      if (output === '') {
        output += i;
      }
      console.log(output);
    }
  }

  //hello world

  render() {
    const data = ['one', 'two', 'three']
    const wrap = <div style={{ marginLeft: '20px' }}
      className='wrapper'>{divs}</div>
    const divs = data.map((d, i) => <div key={i}>{d}</div>)
    return (
      <div className="App">

        {/* <BarChart data={this.state.data} size={[500, 500]} /> */}

        <ComplexBarChart />

        <button onClick={this.fizzBuzz}>Fizzbuzz</button>

      </div>
    );
  }
}

export default App;
