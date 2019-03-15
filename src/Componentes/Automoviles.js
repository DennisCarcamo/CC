import React,{Component} from 'react';
import './UserMainPg';
import icon1 from "../pictures/hondaaccord.jpg";
import icon2 from "../pictures/kia.jpg";
import icon3 from "../pictures/kiario.jpg";
import icon4 from "../pictures/fordfiesta.jpg";
import icon5 from "../pictures/hondacrv.jpg";
import icon6 from "../pictures/kiapicanto.jpg";
import icon7 from "../pictures/mitshubishiasx.jpg";
import icon8 from "../pictures/hondahrv.jpg";
import icon9 from "../pictures/fordfocus.jpg";
import icon10 from "../pictures/bmwx5.jpg";
import icon11 from "../pictures/rangeroverevoque.jpg";
import icon12 from "../pictures/toyotalandcruiser.jpg";
import Cards from './Cards';
//import NavbarLogout from './NavbarLogout';
import {Col,Row,Container} from 'reactstrap';
import CardsBikes from './CardsBikes';

export default class Automoviles extends Component{
    constructor(props){
        super(props);

        this.state = {
            cars: [
              {
                title: "BMW X5",
                subtitle: "",
                picture: icon10
              },
              {
                title: "Ford Fiesta",
                subtitle: "",
                picture: icon4
              },
              {
                title: "Ford Focus",
                subtitle: "",
                picture: icon9
              },
              {
                title: "Honda Accord",
                subtitle: "",
                picture: icon1
              },
              {
                title: "Honda CRV",
                subtitle: "",
                picture: icon5
              },
              {
                title: "Honda HRV",
                subtitle: "",
                picture: icon8
              },
              {
                title: "Kia Sorento",
                subtitle: "",
                picture: icon2
              },
              {
                title: "Kia Picanto",
                subtitle: "",
                picture: icon6
              },
              {
                title: "Kia Rio",
                subtitle: "",
                picture: icon3
              },
              {
                title: "Mitsubishi ASX",
                subtitle: "",
                picture: icon7
              },
              {
                title: "Range Rover Evoque",
                subtitle: "",
                picture: icon11
              },
              {
                title: "Toyota Land Cruiser Prado",
                subtitle: "",
                picture: icon12
              },
            ]
          };
    }
    
    render(){
        let cards = this.state.cars.map(carss => {
            return (
              <Col sm="3">
                <Cards carss={carss} />
                <br />
              </Col>
            );
          });
        return(
            <div>
                <div>
            <Container fluid>
              <Row>{cards}</Row>
            </Container>
            </div>
          </div>
        );
    }
}