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
                subtitle: "50$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fbmwx5.jpg?alt=media&token=52f63268-9cad-4d03-b90a-4ac8d6bf361b"
              },
              {
                title: "Ford Fiesta",
                subtitle: "15$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Ffordfiesta.jpg?alt=media&token=8af7a9bf-c630-466e-a628-29c17d4ee4e9"
              },
              {
                title: "Ford Focus",
                subtitle: "20$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Ffordfocus.jpg?alt=media&token=cd88221a-2d6f-4e02-ac3a-a5b2e4a628cd"
              },
              {
                title: "Honda Accord",
                subtitle: "25$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fhondaaccord.jpg?alt=media&token=5babe88c-cf24-405a-b9a0-9d824a7072b7"
              },
              {
                title: "Honda CRV",
                subtitle: "35$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fhondacrv.jpg?alt=media&token=c600ef83-561b-49bd-90b1-67ffd5d88c8f"
              },
              {
                title: "Honda HRV",
                subtitle: "35$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fhondahrv.jpg?alt=media&token=fb9cd00a-4057-46ee-a453-5114511d1b17"
              },
              {
                title: "Kia Sorento",
                subtitle: "30$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fkia.jpg?alt=media&token=3c7a7f45-11cf-4641-8aec-8b1b2ced6eb3"
              },
              {
                title: "Kia Picanto",
                subtitle: "10$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fkiapicanto.jpg?alt=media&token=ab2a01ea-6c03-444b-b8fd-d80fa8b58d7d"
              },
              {
                title: "Kia Rio",
                subtitle: "20$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fkiario.jpg?alt=media&token=329d22c2-78d1-4dbe-9ee2-b044dde0a538"
              },
              {
                title: "Mitsubishi ASX",
                subtitle: "25$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fmitshubishiasx.jpg?alt=media&token=29483f88-3ac7-49e3-a041-5e785b8a2259"
              },
              {
                title: "Range Rover Evoque",
                subtitle: "60$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Frangeroverevoque.jpg?alt=media&token=35bc7914-855f-4a37-a862-c100157ec7f8"
              },
              {
                title: "Toyota Land Cruiser Prado",
                subtitle: "40$ por día",
                picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Ftoyotalandcruiser.jpg?alt=media&token=3d321286-fb9e-4a64-913a-e484388d7f5d"
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