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
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoieWFoaXIiLCJpYXQiOjE1MzIwMzg0NjYsImV4cCI6MTUzMjEyNDg2Nn0.31Gs8eGz-EdfoU6h2ApaP_q-A6pWddjuNdQSw4RI92Q";
    this.getBi(token)
  }


  getBi(token){
    fetch(this.state.url,{method:'get',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }})
    .then((response) =>response.json())
    .then((res)=>{
      if (!res.error) {
        this.setState({ventas : res.ventas})
      }else {
        console.log(res.descripcion);
      }
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
