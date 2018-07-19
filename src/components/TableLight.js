import React, { Component} from "react";

import { Table} from 'reactstrap';


class TableLight extends Component {
  constructor(props){
    super(props);
    this.state={
      datos:{}
    }
  }

render(){
  console.log(this.props.datos);
  return(
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
            {this.props.datos.map( cell => {
              return <tr key={cell.id} value={cell.fecha} />
            })}
        </tbody>
      </Table>
    </div>
  )
}

}
export default TableLight
