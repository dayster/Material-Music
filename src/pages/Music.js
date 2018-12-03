import React from "react";
import {
    Carousel,
    CarouselCaption,
    CarouselInner,
    CarouselItem,
    View,
    Mask,
    Row, 
    Col,
    MDBBtn,
    ListGroup,
    ListGroupItem,
    Badge,
    Fa,
    iframe
  } from "mdbreact";

class Music extends React.Component {
    state = {
    collapseID: ""
    };

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  render() {
    return (
        <div className="container-fluid" style={{ marginTop: "4.5rem" }}>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                {/* <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                /> */}
                <div className="embed-responsive embed-responsive-21by9">
                  <iframe className="embed-responsive-item" title="GoPro" src="https://www.youtube.com/embed/G9KDqfpCgws"></iframe>
                </div>
                {/* <Mask overlay="black-light" /> */}
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
              <div className="embed-responsive embed-responsive-21by9">
                  <iframe className="embed-responsive-item" title="GoPro" src="https://www.youtube.com/embed/jS-7aSIEJ3M"></iframe>
                </div>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">DJI</h3>
                <p>Meet Osmo Pocket</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
                  alt="Third slide"
                />
                <Mask overlay="black-slight" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
                  alt="Mattonit's item"
                />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
        <Row style={{ marginTop: "2rem" }}>
          <Col md="10">
          
        <Row>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Watch</p>
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
                <p className="white-text">Social</p>
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
                <p className="white-text">News</p>
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
                <p className="white-text">About Us</p>
            </Mask>
            </View>
        </Col>
        </Row>
        {/* <Row style={{ marginTop: "2rem" }}>
        <Col md="3">
            <View>
            <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Watch</p>
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
                <p className="white-text">Social</p>
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
                <p className="white-text">News</p>
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
                <p className="white-text">About Us</p>
            </Mask>
            </View>
        </Col>
        </Row> */}

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
                <Fa icon="user-circle" size="2x"/>
                <Badge>Dayster Content</Badge>
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

export default Music;
