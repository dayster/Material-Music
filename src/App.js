import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";
import {
  Footer,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu,  
  DropdownItem, 
  Fa
} from "mdbreact";
import { MDBNavbar, MDBNavbarBrand,
  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./App.css";

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

   
  render() {
    let audioFiles = [
      {
        src: "http://theemon.com/t/transport-wp/PlaceHolder/wp-content/uploads/2015/09/BlueDucks_FourFlossFiveSix.mp3",
        title: "Hey Jude",
        artist: "The Beatles"
      },
      {
        src: "http://theemon.com/t/transport-wp/PlaceHolder/wp-content/uploads/2015/09/BlueDucks_FourFlossFiveSix.mp3",
        title: "Uptown Funk ft. Bruno Mars",
        artist: "Mark Ronson"
      },
      {
        src: "http://theemon.com/t/transport-wp/PlaceHolder/wp-content/uploads/2015/09/BlueDucks_FourFlossFiveSix.mp3",
        title: "Rolling In The Deep",
        artist: "Adele"
      }
    ]; 
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
        <MDBNavbar className="top-header" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/">
                <img
                  src="./Logo.PNG"
                  alt=""
                />{" "}
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              
              <MDBNavbarNav className="top-menu" left>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/music"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Community
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/world"
                  >
                    World
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/feedback"
                  >
                    FeedBack
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
              <MDBNavItem>
              <div className="dayster-form input-group md-form form-sm form-2 pl-0">
                  <input
                    className="form-control my-0 py-1"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text lighten-3" id="basic-text1">
                      <Fa icon="search" className="text-grey" />
                    </span>
                  </div>
                </div>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!"><Fa icon="user" />Guest</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {this.state.collapseID && overlay}
          {/* <main style={{ marginTop: "4rem" }}> */}
          <main>
            <Routes />
          </main>

          <Footer className="fixed-bottom">
            <p className="footer-copyright mb-0 py-3 text-center">
            <AudioPlayer
                sliderClass="my-slider"
                audioFiles={audioFiles}/>
              {/* &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a> */}
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
