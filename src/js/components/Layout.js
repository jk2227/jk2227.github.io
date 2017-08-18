import React from "react";
import { Link } from "react-router";
import { Image, Grid, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";


export default class Layout extends React.Component {


  render() {

    return (
      <div>
        <br/>
        <Header />
        <br/><br/>
        <center>
          <a href="/">
            <h1>Banner</h1>
          </a>
          <br/><br/>
        </center>
        <Grid>
          <Col md={3}>
          <Image src="https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067" responsive />
          <br/>
          Weon Kim 2017<br/>
          Filler
          </Col>
          <Col md={9}>
        <center>
        <NavBar />
        </center>
        {this.props.children}<br/><br/><br/><br/><br/><br/>
        </Col>
        </Grid>
        <Footer />
      </div>
    );
  }
}
