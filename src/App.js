import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";
import Content from "./Componentes/Content";
import fire from "./config/Fire";
import SignIn from "./Componentes/SignIn";
import UserMainPg from "./Componentes/UserMainPg";
import SignUp from "./Componentes/SignUp";
import Navbar from "./Componentes/Navbar";
//import Navbarlog from "./Componentes/NavbarLog";
//import NavbarLogout from "./Componentes/NavbarLogout";
import Automoviles from "./Componentes/Automoviles";
import Bikes from "./Componentes/Bikes";
import Homepage from "./Componentes/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as firebase from "firebase";
import * as routes from "./Componentes/Routes";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  logout() {}

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Router>
          <div>
          {this.state.user ? <UserMainPg/> :
          <Navbar authListener={this.state.authListener} user={this.state.user} /> }
            <Route
              exact
              path={routes.Homepage}
              component={() => <Homepage />}
            />
            <Route exact path={routes.SignIn} component={() => <SignIn />} />
            <Route exact path={routes.SignUp} component={() => <SignUp />} />
            <Route exact path={routes.UserMainPg} component ={()=><UserMainPg/>}/>
            <Route exact path={routes.Automoviles} component={()=><Automoviles/>}/>
            <Route exact path={routes.Bikes} component={()=><Bikes/>}/>
          </div>
        </Router>
        {/*{this.state.user ?   <NavbarLogout/> : <Login/> }*/}
      </div>
    );
  }
}

export default App;
