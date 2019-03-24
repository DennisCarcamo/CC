import React from "react";
import {
  Collapse, Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../pictures/connectedcar.PNG";
import fire from "../config/Fire";
import { Button } from 'reactstrap'
export default class Example extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  signOutUser = async () => {
    try {
      await fire.auth().signOut();
      console.log("Logged Out");
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <Navbar color="" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button onClick={this.signOutUser}>  Log out </Button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}