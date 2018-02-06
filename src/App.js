import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'
import ComplexBarChart from './BarChart'

const ChannelsList = () =>
  (<ul>
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>);
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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <BarChart data={this.state.data} size={[500, 500]} />
        <ChannelsList />

        {/* <ComplexBarChart xLabel='Characters' yLabel='Occurrences' /> */}
        <button onClick={this.randomDataFire}>New Random data</button>

      </div>
    );
  }
}

export default App;
