import React, {Component} from "react";
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input,Container} from 'reactstrap';

// import TableSimple from "../components/TableSimple"

class Inventario extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      modal: false,
      prod:{},
      titleModal : '',
      url : 'http://localhost:4000/inventariado/',
    };
    this.edit = this.edit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.product = this.product.bind(this);
    this.getAll = this.getAll.bind(this);
  }



  componentWillMount() {
    this.getAll()
  }

  getAll(){
    fetch("http://localhost:4000/inventariado")
    .then((response) => response.json())
    .then((res)=>{
      this.setState({items:res})
    })
  }

  toggle(d) {
    if (d === 0) {
      this.setState({
        titleModal : "Nuevo Producto",
        modal: !this.state.modal,
        prod:{}
      })
    }else {
      this.setState({
        titleModal : "Editar Producto",
        modal: !this.state.modal,
      })
    }
  }

  edit(i){
    this.setState({
      prod:{id:i.id,producto:i.producto,descripcion:i.descripcion,costo:i.costo,cantidad:i.cantidad,edit:1}
    })
    this.toggle(1)
  }

  handleChange (e){
    const {name, value} = e.target;
    let prod = this.state.prod;
    prod[name] = value;
    return this.setState({prod});
  }

  product(e){
    e.preventDefault();
    let edit = this.state.prod.edit;
    console.log(edit);
    if (edit === 1) {
      this.toggle()
      fetch(this.state.url + "set", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id:this.state.prod.id, producto:this.state.prod.producto, descripcion:this.state.prod.descripcion,costo:this.state.prod.costo, cantidad:this.state.prod.cantidad})
      }).then((response) => {
        this.setState({prod:{}})
        this.getAll()
      });
    }else {
      this.toggle()
      fetch(this.state.url + "add", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({producto:this.state.prod.producto, descripcion:this.state.prod.descripcion,costo:this.state.prod.costo, cantidad:this.state.prod.cantidad})
      }).then((response) => {
        this.setState({prod:{}})
        this.getAll()
      });
    }
  }




  render(){
    return(
      <div>
        <h2>Inventario</h2>
        <Button color="success" onClick={() => this.toggle(0)}>Add Stock</Button>
        <hr/>
        <br/>

        <Table hover responsive>
          <thead>
            <tr>
              <th className="xenter">#</th>
              <th className="xenter">Producto</th>
              <th className="xenter">Descripción</th>
              <th className="xenter">Costo de Renta</th>
              <th className="xenter">Cantidad</th>
              <th className="xenter">---</th>
            </tr>
          </thead>
          {this.state.items.map((obj,index) =>
            <tbody key={index}>
              <tr>
                <td className="xenter">{obj.id}</td>
                <td className="xenter">{obj.producto}</td>
                <td className="xenter">{obj.descripcion}</td>
                <td className="xenter">$ {obj.costo}</td>
                <td className="xenter">{obj.cantidad}</td>
                <td className="xenter"><Button onClick={() => this.edit(obj)} size="sm" color="warning">Editar</Button></td>
              </tr>
            </tbody>
          )}
        </Table>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.titleModal}</ModalHeader>
          <ModalBody>
            <Container>
              <Form>
                <FormGroup>
                  <Label for="producto">Producto</Label>
                  <Input type="text" name="producto"  placeholder="Producto" value={this.state.prod.producto || ''} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="descripcion">Descripción</Label>
                  <Input type="text" name="descripcion"placeholder="Descripción" value={this.state.prod.descripcion || ''} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="costo">Costo de Renta</Label>
                  <Input type="number" name="costo"  placeholder="$" value={this.state.prod.costo || ''} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="cantidad">Cantidad</Label>
                  <Input type="number" name="cantidad"  placeholder="Cantidad" value={this.state.prod.cantidad || ''} onChange={this.handleChange}/>
                </FormGroup>
              </Form>
            </Container>

          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancelar</Button>{' '}
              <Button color="primary" onClick={this.product}>Aceptar</Button>
            </ModalFooter>
          </Modal>

        </div>
      )
    }
  }

  export default Inventario
