import React,{Component} from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input,Container} from 'reactstrap';


class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state={
      modal: false,
      prod:{}
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newProduct = this.newProduct.bind(this);
  }

  toggle(open) {
    console.log(open);
   this.setState({
     modal: !this.state.modal,
     prod:{}
   });
 }

 handleChange (e){
   const {name, value} = e.target;
   let prod = this.state.prod;
   prod[name] = value;
   return this.setState({prod});
 }

 newProduct(e){
   e.preventDefault();
   console.log(this.state.prod)
   this.toggle()
   fetch("http://localhost:4000/inventariado/add", {
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

  render(){
    let open = this.props.open;
    // console.log(open);
    // this.state.modal = open;
      return(
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Nuevo Producto</ModalHeader>
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
            <Button color="primary" onClick={this.newProduct}>Aceptar</Button>
          </ModalFooter>
        </Modal>
    )
  }
}


export default ModalProduct;
