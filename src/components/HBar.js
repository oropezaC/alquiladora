import React, {Component} from "react";

import {Bar} from 'react-chartjs-2';

const colors = [
  'rgba(28, 176, 112, 1)',
  'rgba(77, 77, 128, 1)',
  'rgba(76, 146, 38, 0.96)',
  'rgba(193, 129, 26, 0.84)',
  'rgba(209, 21, 24, 0.94)',
  'rgba(21, 209, 105, 0.94)',
  'rgba(255, 234, 0, 0.73)',
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  'rgba(76, 146, 38, 0.96)',
  'rgba(193, 129, 26, 0.84)'
]
const options={
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: { min: 0 },
      stacked: true,
    }],
  }
}

class HBar extends Component {
  constructor(props){
    super(props);
    this.state={
      datos:{}
    }
  }
  render(){
    let Labels = this.props.datos.map(item =>{return item.fecha})
    let Ventas = this.props.datos.map(item=>{return item.venta})

    const data = {
      labels: Labels,
      datasets: [
        {
          label: 'Pedidos',
          backgroundColor: colors,
          borderWidth: 1,
          hoverBackgroundColor: colors,
          hoverBorderColor: colors,
          data: Ventas,
        }
      ]
    };
    return(
      <div>

        <Bar data={data} options={options}/>
      </div>
    )
  }
}

export default HBar;
