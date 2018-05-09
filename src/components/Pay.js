import React,{Component} from "react";
import {Pie} from 'react-chartjs-2';

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

class Pay extends Component {
	constructor(props){
		super(props);
		this.state={
			datos:{}
		}
	}

  render(){
		let d = this.props.datos;
		const data = {
			labels: [
				'Tablon',
				'Redonda',
				'Cuadrada',
				'Brincolin',
				'Inflable Chico',
				'Inflable Grnade',
				'Meseros'
			],
			datasets: [{
				data: [d.tablon,d.redonda,d.cuadrada,d.brincolin,d.inflableChico,d.inflableGrande,d.meseros],
				backgroundColor: colors,
				hoverBackgroundColor:colors
			}]
		};
    return(
      <div>
        <h2>Demanda de Productos</h2>
        <Pie data={data} />
      </div>
    )
  }
}

export default Pay;
