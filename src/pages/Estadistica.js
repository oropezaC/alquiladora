import React, {Component} from "react";

import { Container,Row,Col} from 'reactstrap';

import HBar from "../components/HBar";
import Pay from "../components/Pay";



class Estadisticas extends Component {
  constructor(props){
    super(props);
    this.state={
      url : 'http://localhost:4000/estadisticas',
      months:[],
      products:[],
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
        months:res.months,
        products:res.products
      })
    })
  }


  render(){
    return(
      <Container>
        <Row>
          <Col>
            <HBar datos={this.state.months}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pay datos={this.state.products}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Estadisticas;
