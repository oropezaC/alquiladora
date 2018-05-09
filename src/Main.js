import React, {Component} from "react";
import { Route,HashRouter } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Cotizacion from "./pages/Cotizacion";
import Estadisticas from "./pages/Estadistica";

//components
import SideBar from "./components/SideBar";


import {

  Navbar,
  NavbarToggler,
  NavbarBrand,



  Row,Col,
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
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/#/" className="text-white"><h2>Alquiladora Casa AR</h2></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </Navbar>
          <Row>
            <Col xs="2" className="colSide">
                <SideBar />
            </Col>
            <Col>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/inventario" component={Inventario}/>
                <Route path="/cotizacion" component={Cotizacion}/>
                <Route path="/estadisticas" component={Estadisticas}/>
              </div>
            </Col>
          </Row>
        </div>
      </HashRouter>
    )
  }
}

export default Main
