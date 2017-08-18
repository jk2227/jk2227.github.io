import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default class Main extends React.Component {

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    var imgStyle = {
      maxWidth: '100%', maxHeight:'90%'
    }
    return (
      <div>
        <center>
            Main Page
        </center>
      </div>
    );
  }
}
