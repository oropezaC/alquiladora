import React, {Component} from "react";

import CardHome from "../components/CardHome";
import {Container} from 'reactstrap';

class Home extends Component {

  render(){
    return(
      <Container>
        <h2>Bienvenido</h2>
        <CardHome/>

      </Container>
    )
  }
}

export default Home;
