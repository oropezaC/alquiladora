import React, {Component} from "react";

import CardHome from "../components/CardHome";
import {Container} from 'reactstrap';

class Home extends Component {

  render(){
    return(
      <Container>
        <h2>Bienvenido</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. </p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

        <CardHome/>
      </Container>
    )
  }
}

export default Home;
