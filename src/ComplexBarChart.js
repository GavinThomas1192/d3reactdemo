
"use strict"

import React from 'react'
import ReactDOM from 'react-dom';
import * as V from 'victory';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';


export default class ComplexBarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }

    }

    randomDataFire = () => {
        let dataArray = []
        for (var i = 0; i < 4; i++) {
            //need to add plus one otherwise it starts at zero and breaks the padding
            dataArray.push({ quarter: (i + 1), earnings: Math.floor(Math.random() * 10000) + 1 })

        }
        this.setState({ data: dataArray })
        console.log(this.state)
    }

    render() {

        return (
            <div style={{ maxHeight: '250px', maxWidth: '500px' }}>



                <VictoryChart
                    // domainPadding will add space to each side of VictoryBar to
                    // prevent it from overlapping the axis
                    domainPadding={20}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`$${x / 100}k`)}
                    />
                    <VictoryBar
                        data={this.state.data}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>

                <button onClick={this.randomDataFire}>New Random data</button>
            </div>
        )
    }
}

// export default ComplexBarChart
