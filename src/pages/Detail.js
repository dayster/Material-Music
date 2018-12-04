import React from "react";
import {
    View,
    Mask,
    Row, 
    Col
  } from "mdbreact";

class Detail extends React.Component {
  
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
        <Row style={{ marginTop: "2rem" }}>
          
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/98f0137f8bf2d4917322bf953f7ec47dd75b47b9"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Alternative Music</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/1a1f94b74d138e48d1853d2990b0342b697ac25e"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Blues</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/a5c523c5582f1aadfa5dc58a2f673ff794c27693"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Classical Music</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/2d65455fe52f5f97bfd3eac579fce20dab853660"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Country Music</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/82c32df8fe71cf3d76818f2aaa6032a0b86c0f52"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Dance Music</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/44a60f5bc75e3fa5314198b51df496f3e3bc1b59"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Hip Hop / Rap</p>
            </Mask>
            </View>
        </Col>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/924ba733d6cfb005f57e2c665431f50b976172f5"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Jazz</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/7071c4c6b0e960d5581e8c7acb4cad922d561d15"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Rock</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/8fb70050bcf7955842d53918bd647407b97a206b"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Opera</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/4e79b8ecd542a7469ca7cf6a1a784b5bc881a836"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Pop</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/82c32df8fe71cf3d76818f2aaa6032a0b86c0f52"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Metal</p>
            </Mask>
            </View>
        </Col>
        <Col md="2">
            <View>
            <img
                src="https://i.scdn.co/image/44a60f5bc75e3fa5314198b51df496f3e3bc1b59"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Punk</p>
            </Mask>
            </View>
        </Col>
        </Row>
        </div>
    );
  }
}

export default Detail;
