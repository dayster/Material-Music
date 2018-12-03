import React from "react";
import {
    View,
    Mask,
    Row, 
    Col,
    Fa,
    Navbar, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container,
    Card,
    CardBody,
    CardGroup,
    CardImage,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
    Badge,
    MDBBtn
  } from "mdbreact";

class Home extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  render() {
    return (
      
        <div className="container-fluid" style={{ marginTop: "5rem" }}>
        <Row>
        <Col md="2"> 
        MAIN
        <ul className="fa-ul">
          <li><i class="fa fa-archive"></i>  Browse</li>
          <li><i class="fa fa-history"></i>  Activity</li>
          <li><i class="fa fa-feed"></i>  Radio</li>          
        </ul>  
        YOUR MUSIC
        <ul className="fa-ul">
          <li><i class="fa fa-music"></i>  Songs</li>
          <li><i class="fa fa-music" aria-hidden="true"></i>  Albums</li>
          <li><i class="fa fa-microphone"></i> Artists</li>  
          <li><i class="fa fa-file-sound-o"></i>  Stations</li>         
          <li><i class="fa fa-file-sound-o"></i>  Local Files</li>         
        </ul>
        PLAYLISTS
        <ul className="fa-ul">
          <li><Fa icon="cc-discover" list/>  Discover Weekly</li>
          <li><Fa icon="check-square" list/>  Bento</li>
          <li><Fa icon="spinner" list spin/>  Dance Beats</li> 
          <li><Fa icon="spinner" list spin/>  Hot Hot Hot</li>          
        </ul>
        </Col>
          <Col md="8">
          <Navbar
              color="black"
              dark
              expand="md"
              scrolling
            >
              <Container>
                <NavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <Collapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">OVERVIEW</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">CHARTS</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">GENERES & MOODS</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">NEW RELEASES</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">DISCOVER</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">CONCERTS</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
            <CardGroup deck className="mt-3">
            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Chart</CardTitle>
                <CardText>
                  Global Top 50, Canada Top 50, Canada Viral 50
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">New Releases</CardTitle>
                <CardText>
                Global Top 50, Canada Top 50, Canada Viral 50
                </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Discover</CardTitle>
                <CardText>
                Global Top 50, Canada Top 50, Canada Viral 50d
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>    
          <h3 style={{ marginTop: "1rem" }}>Generes & Moods</h3>
          <hr />
        <Row style={{ marginTop: "1rem" }}>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Pop</p>
            </Mask>
            </View>
        </Col>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">EDM/Dance</p>
            </Mask>
            </View>
        </Col>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Hip Hop</p>
            </Mask>
            </View>
        </Col>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Country</p>
            </Mask>
            </View>
        </Col>
        
        </Row>
        <Row style={{ marginTop: "2rem" }}>
        
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Rock</p>
            </Mask>
            </View>
        </Col>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">India</p>
            </Mask>
            </View>
        </Col>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">RnB</p>
            </Mask>
            </View>
        </Col>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Francophon</p>
            </Mask>
            </View>
        </Col>
        
        </Row>
        

          </Col>
          <Col md="2">
          <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
            <div className="d-flex flex-column">
                <div className="p-2">
                    <p className="white-text">Messages</p> 
                </div>
                <div className="p-2">
                    <MDBBtn color="elegant" rounded size="sm">Primary</MDBBtn>
                </div>
                </div>
            </Mask>
            </View>
            <ListGroup>
              <ListGroupItem
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                active
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center">
              <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                active
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              {/* 
              <ListGroupItem
                active
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center">
              <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                active
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                active
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center">
              <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem>
              <ListGroupItem
                active
                className="d-flex justify-content-between align-items-center"
              >
               <Fa icon="user-circle" size="2x"/> <Badge>Dayster Content</Badge>
              </ListGroupItem> */}
            </ListGroup>
        </Col>
        </Row>
        </div>
    );
  }
}

export default Home;
