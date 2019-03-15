import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar.js";
import Footer from "./Footer";
import fire from "../config/Fire";
import * as routes from "./Routes";

import "firebase/database";

import SingIn from "./SignIn";
import {
  Card,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      username: "",
      email: "",
      password: "",
      confirContrasena: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.createUser = this.createUser.bind(this);
    this.add_user = this.add_user.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.add_user();
  }

  add_user() {
    console.log(this.nombre);
  }

  createUser() {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("usuariocreado");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <div
          style={{ border: "thin", display: "flex", justifyContent: "center" }}
        >
          <Card style={{ padding: "40px" }}>
            <Form>
              <FormGroup row>
                <Label for="Nombre" sm={4}>
                  Nombre
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Apellido" sm={4}>
                  Apellido
                </Label>
                <Col sm={8}>
                  <Input
                    type="apellido"
                    name="apellido"
                    id="apellido"
                    placeholder="Ingrese su Apellido"
                    value={this.state.apellido}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Nombre de Usuario" sm={4}>
                  Nombre de Usuario
                </Label>
                <Col sm={8}>
                  <Input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Ingrese su Nombre de Usuario"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Correo" sm={4}>
                  Correo
                </Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ingrese su Correo"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={4}>
                  Contraseña
                </Label>
                <Col sm={8}>
                  <Input
                    autoComplete=""
                    type="password"
                    name="password"
                    id="password"
                    placeholder="************"
                    value={this.state.contrasena}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="confirm password" sm={4}>
                  Confirmar Contraseña
                </Label>
                <Col sm={8}>
                  <Input
                    autoComplete=""
                    type="password"
                    name="confirContrasena"
                    id="confirContrasena"
                    placeholder="************"
                    value={this.state.confirContrasena}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 0 }}>
                  <Button type="submit" onClick={this.onClick}>
                    Confirmar
                  </Button>{" "}
                  <Button>
                    <Link to={routes.SignIn}>Ya tengo cuenta</Link>
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}
