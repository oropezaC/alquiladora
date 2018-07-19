import React, {Component} from "react";
// import { Route,HashRouter } from "react-router-dom";

//pages
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Inventario from "./pages/Inventario";
// import Cotizacion from "./pages/Cotizacion";
// import Estadisticas from "./pages/Estadistica";

//components
// import NavBar from "./components/NavBar";
//
//
// import { Col } from 'reactstrap';


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
        <div>

        </div>

    )
  }
}

export default Main
