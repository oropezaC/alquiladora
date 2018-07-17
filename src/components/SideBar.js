import React,{Component} from "react";

import {Nav, NavItem, NavLink } from 'reactstrap';

import {MdEqualizer} from 'react-icons/lib/md'
import {FaBalanceScale,FaArchive,FaUser} from 'react-icons/lib/fa'

class SideBar extends Component{



  render(){
    return(
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink href="/#/estadisticas"><MdEqualizer/> Estadisticas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FaUser/> Clientes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><FaBalanceScale/> Finanzas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#/inventario"><FaArchive/> Inventario</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default SideBar;
