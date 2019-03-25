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
          picture: icon1
        },
        {
          title: "Honda Gold Wing",
          subtitle: "13$ por día",
          picture: icon2
        },
        {
          title: "Honda Monkey",
          subtitle: "12$ por día",
          picture: icon3
        },
        {
          title: "Yamaha Tracer 900",
          subtitle: "10$ por día",
          picture: icon4
        },
        {
          title: "Vespa",
          subtitle: "8$ por día",
          picture: icon5
        },
        {
          title: "BMW R Nine Tracer",
          subtitle: "20$ por día",
          picture: icon6
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
