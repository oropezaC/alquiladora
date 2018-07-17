import React, {Component} from "react";
import { Route,HashRouter } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Cotizacion from "./pages/Cotizacion";
import Estadisticas from "./pages/Estadistica";

//components
import NavBar from "./components/NavBar";


import {
  Row,Col,Container
} from 'reactstrap';


class Main extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <HashRouter>
        <div>
          <NavBar/>
          <div>
            <Col>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/inventario" component={Inventario}/>
                <Route path="/cotizacion" component={Cotizacion}/>
                <Route path="/estadisticas" component={Estadisticas}/>
              </div>
            </Col>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main
