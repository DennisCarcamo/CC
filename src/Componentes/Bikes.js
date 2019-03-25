import React from "react";
import Carouse from "./Carousel";
import fire from "../config/Fire";
//import NavbarUser from "./NavBarUser";
import Footer from "./Footer";
import icon1 from "../pictures/hondaafricantwin.jpg";
import icon2 from "../pictures/hondagoldwing.jpg";
import icon3 from "../pictures/hondamonkey.jpg";
import icon4 from "../pictures/yamahatracer900.jpg";
import icon5 from "../pictures/vespa.jpg";
import icon6 from "../pictures/bmwrninetracer.jpg";
import * as firebase from "firebase";
import { Col, Row, Container } from "reactstrap";
import Cards from "./CardsBikes";

export default class UserMainPg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: [
        {
          title: "Honda African Twin",
          subtitle: "13$ por día",
          picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fhondaafricantwin.jpg?alt=media&token=0d385069-2c36-48e0-bceb-d3e158885548"
        },
        {
          title: "Honda Gold Wing",
          subtitle: "13$ por día",
          picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fhondagoldwing.jpg?alt=media&token=bcf428b4-ee58-46f0-8457-196eb5a73ec0"
        },
        {
          title: "Honda Monkey",
          subtitle: "12$ por día",
          picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fhondamonkey.jpg?alt=media&token=8f1a10ef-5aa0-4590-803a-960e13fa992a"
        },
        {
          title: "Yamaha Tracer 900",
          subtitle: "10$ por día",
          picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fyamahatracer900.jpg?alt=media&token=c7953d4d-9116-49db-bbc0-98437b37232f"
        },
        {
          title: "Vespa",
          subtitle: "8$ por día",
          picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fvespa.jpg?alt=media&token=291344ed-ba38-4780-a26c-d6768c39a779"
        },
        {
          title: "BMW R Nine Tracer",
          subtitle: "20$ por día",
          picture: "https://firebasestorage.googleapis.com/v0/b/connectedcar-12d9e.appspot.com/o/Pictures%2Fbmwrninetracer.jpg?alt=media&token=f3b7f5e5-fdea-48cd-929a-3d2603cee176"
        }
      ]
    };
  }
  render() {
    let cards = this.state.bikes.map(bikess => {
      return (
        <Col sm="3">
          <Cards bikess={bikess} />
          <br />
        </Col>
      );
    });
    return (
      <div>
        <Container>
          <Row>{cards}</Row>
        </Container>
      </div>
    );
  }
}
