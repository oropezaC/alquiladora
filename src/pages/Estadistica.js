import React, {Component} from "react";

import { Container,Row,Col} from 'reactstrap';

import HBar from "../components/HBar";
import TableLight from "../components/TableLight";



class Estadisticas extends Component {
  constructor(props){
    super(props);
    this.state={
      url : 'http://localhost:4500/estadistica',
      fecha:[],
      ventas:[],
    };
    this.getBi = this.getBi.bind(this);
  }

  componentWillMount() {
    this.getBi()
  }


  getBi(){
    fetch(this.state.url)
    .then((response) => response.json())
    .then((res)=>{
      this.setState({
        ventas : res
      })

    })
  }


  render(){
    return(
      <Container>
        <h2 className="titleGraph">Monitor Mensual de Pedidos</h2>
        <Row>
          <Col>
            <TableLight datos={this.state.ventas}/>
          </Col>
          <Col>
            <HBar datos={this.state.ventas}/>
          </Col>

        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default Estadisticas;
