import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'
import ComplexBarChart from './BarChart'


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
  // Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
  fizzBuzz = () => {
    // for (var i = 0; i <= 100; i++) {
    //   if (i % 3 == 0 && i % 5 == 0) {
    //     console.log(i, 'fizzBuzz')
    //   } else if (i % 5 == 0) {
    //     console.log(i, 'buzz')
    //   } else if (i % 3 == 0) {
    //     console.log(i, 'fizz')
    //   } else {
    //     console.log(i)
    //   }
    // }
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

  render() {
    const data = ['one', 'two', 'three']
    const wrap = <div style={{ marginLeft: '20px' }}
      className='wrapper'>{divs}</div>
    const divs = data.map((d, i) => <div key={i}>{d}</div>)
    return (
      <div className="App">

        <BarChart data={this.state.data} size={[500, 500]} />

        <button onClick={this.fizzBuzz}>New Random data</button>

      </div>
    );
  }
}

export default App;
