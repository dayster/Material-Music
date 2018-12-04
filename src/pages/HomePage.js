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
    Badge,
    MDBBtn,MDBListGroup, MDBListGroupItem, MDBBadge
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
          <li><i class="fa fa-music"></i>  Discover Weekly</li>
          <li><i class="fa fa-music"></i>  Bento</li>
          <li><i class="fa fa-music"></i> Dance Beats</li> 
          <li><i class="fa fa-music"></i>  Hot Hot Hot</li>          
        </ul>
        </Col>
          <Col md="8">
          <Navbar
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
                src="https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg"
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
                src="https://t.scdn.co/media/derived/jazz-274x274_d6f407453a1f43d3163c55cca624a764_0_0_274_274.jpg"
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
                src="https://t.scdn.co/media/categories/karaoke_274x274.jpg"
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
                src="https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg"
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
                src="https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg"
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
                src="https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg"
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
                src="https://t.scdn.co/media/derived/travel-274x274_1e89cd5b42cf8bd2ff8fc4fb26f2e955_0_0_274_274.jpg"
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
                src="https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg"
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
                src="https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg"
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
                src="https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg"
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
                src="https://t.scdn.co/images/7fe0f2c9c91f45a3b6bae49d298201a4.jpeg"
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
            <MDBListGroup>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>14</MDBBadge>Taylor Swift<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>2</MDBBadge>Slipknot<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>1</MDBBadge>Madonna<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>25</MDBBadge>Linkinpark<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>30</MDBBadge>Korn<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>32</MDBBadge>Queen<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>25</MDBBadge>Metallica<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center"><MDBBadge color="primary"
                  pill>33</MDBBadge>Adele<Badge color="purple" pill><Fa icon="comments-o" aria-hidden="true"/></Badge> 
              </MDBListGroupItem>
            </MDBListGroup>
        </Col>
        </Row>
        </div>
    );
  }
}

export default Home;
