import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";
import Content from './Componentes/Content';
import fire from "./config/Fire";
import Login from "./Componentes/SignIn";
import UserMainPg from "./Componentes/UserMainPg"
import SignUp from "./Componentes/SignUp"


class App extends Component {
  static propTypes  ={
    children: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  logout(){
    
  }

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
    const {children} = this.props;
    return (
      <div className="App">
       {this.state.user ?   <UserMainPg/> : <Login/> }
      </div>
    );
  }
}

export default App;
