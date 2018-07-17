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

class HBar extends Component {
  constructor(props){
    super(props);
    this.state={
      datos:{}
    }
  }
  render(){
    let d = this.props.datos;
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      datasets: [
        {
          label: 'Pedidos',
          backgroundColor: colors,
          borderWidth: 1,
          hoverBackgroundColor: colors,
          hoverBorderColor: colors,
          data: [d.enero,d.febrero,d.marzo,d.abril,d.mayo]
        }
      ]
    };

    return(
      <div>
       <h2>Monitor Mensual de Pedidos</h2>
       <Bar data={data} />
      </div>
    )
  }
}

export default HBar;
