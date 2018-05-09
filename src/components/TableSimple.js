import React,{Component} from "react";
import { Table,Button,Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input,Container } from 'reactstrap';


class TableSimple extends Component{
  constructor(props){
    super(props)
    this.state={
      prod:{},
      modal: false,
    }
    this.edit = this.edit.bind(this);

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setProduct = this.setProduct.bind(this)
  }



  edit(i){
    this.setState({
      prod:{id:i.id,producto:i.producto,descripcion:i.descripcion,costo:i.costo,cantidad:i.cantidad}
    })
    this.toggle()
  }


  toggle() {
    console.log(this.state.prod);
   this.setState({
     modal: !this.state.modal,
   });
 }

 handleChange (e){
   const {name, value} = e.target;
   let prod = this.state.prod;
   prod[name] = value;
   return this.setState({prod});
 }

 setProduct(e){
   e.preventDefault();
   console.log(this.state.prod)
   this.toggle()
   fetch("http://localhost:4000/inventariado/set", {
      method: 'PUT',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
      body: JSON.stringify({id:this.state.prod.id, producto:this.state.prod.producto, descripcion:this.state.prod.descripcion,costo:this.state.prod.costo, cantidad:this.state.prod.cantidad})
    }).then((response) => {
       this.setState({prod:{}})
    });
 }


  render(){
    let data = this.props.datos;
    return(
      <div>
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
          {data.map((item,index) =>
            <tbody key={index}>
              <tr>
                <td className="xenter">{item.id}</td>
                <td className="xenter">{item.producto}</td>
                <td className="xenter">{item.descripcion}</td>
                <td className="xenter">$ {item.costo}</td>
                <td className="xenter">{item.cantidad}</td>
                <td className="xenter"><Button onClick={() => this.edit(item)} size="sm" color="warning">Editar</Button></td>
              </tr>
            </tbody>
          )}
        </Table>

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
                  <Input type="number" name="costo"  placeholder="$ $ $" value={this.state.prod.costo || ''} onChange={this.handleChange}/>
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
              <Button color="primary" onClick={this.setProduct}>Aceptar</Button>
            </ModalFooter>
          </Modal>
      </div>
    )
  }
}

export default TableSimple;
