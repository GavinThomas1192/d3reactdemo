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

  render() {
    const data = ['one', 'two', 'three']
    const wrap = <div style={{ marginLeft: '20px' }}
      className='wrapper'>{divs}</div>
    const divs = data.map((d, i) => <div key={i}>{d}</div>)
    return (
      <div className="App">

        <BarChart data={this.state.data} size={[500, 500]} />

        <button onClick={this.randomDataFire}>New Random data</button>

      </div>
    );
  }
}

export default App;
