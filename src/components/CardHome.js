import React, {Component} from "react";

import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle,CardGroup,CardFooter,Button } from 'reactstrap';

  import growth from "../assets/img/growth.png"
  import target from "../assets/img/target.png"


  class CardHome extends Component{
    constructor(props){
      super(props);

      this.goIt = this.goIt.bind(this);
    }

    goIt(){
      // console.log("aqui ando")
    }

    render(){
      return(
        <div>
          <CardGroup>
            <Card className="cardSize"  body inverse color="info">
              <CardImg top width="50%" src={growth} alt="Card image cap"></CardImg>
              <CardBody>
                <CardTitle>Ventas</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <CardFooter>
                <Button color="danger"><CardLink href="/#/estadisticas">Ver Más</CardLink></Button>
              </CardFooter>
            </Card>
            <Card className="cardSize" body inverse color="warning">
              <CardImg top width="100%" src={target} alt="Card image cap" />
              <CardBody>
                <CardTitle>Clientes</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <CardFooter><Button onClick={this.goIt}  color="info">Ver Más</Button></CardFooter>
            </Card>
            <Card className="cardSize" body inverse color="danger">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <CardFooter><Button onClick={this.goIt}  color="success">Ver Más</Button></CardFooter>
            </Card>

          </CardGroup>
        </div>
      )
    }
  }

  export default CardHome;
