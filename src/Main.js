import React, {Component} from "react";
import { Route,HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Pedido from "./pages/Pedido";
import Cotizacion from "./pages/Cotizacion";



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem><NavLink exact="true" href="/#/" className="text-white">Home</NavLink></NavItem>
                <NavItem><NavLink  href="/#/pedido" className="text-white">Pedidos</NavLink></NavItem>
                <NavItem><NavLink  href="/#/cotizacion" className="text-white">Cotizacion</NavLink></NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/pedido" component={Pedido}/>
            <Route path="/cotizacion" component={Cotizacion}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main
