import React from "react";
import CoverFlow from 'coverflow-react';
import {
    View,
    Mask,
    Row, 
    Col,
    MDBBtn,
    Badge,
    Fa,
    MDBListGroup, MDBListGroupItem, MDBBadge
  } from "mdbreact";
  import './Music.css';

class Music extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      //width: document.body.offsetWidth,
      width: 1260,
      passWidth: true,
      height: 250,
      passHeight: true,
      itemRatio: {
        x: 8,
        y: 5
      },
      passItemRatio: true,
      passBackground: false,
      passLabels: false,
      direction: 'horizontal'
    };
    window.addEventListener('resize', ()=>{
      this.setState((prevState)=>{
        if (prevState.direction === 'vertical') {
          return {
            height: document.body.offsetHeight
          };
        }
        return {
          width: document.body.offsetWidth
        }
      });
    });
  }
    state = {
    collapseID: ""
    };

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  render() {
    const imagesArr = [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9f0fdc18a215ec725f8ca61dc6fcbdf&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96b6eb1c3bac5a2a548d7f90020bef2f&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2e3abeff94d9a95db8c3b25e84f3718&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=20350f2b60dc7d7ac4b5e9526afacf77&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66fb9d30c34fe2b1db28563c31c42c22&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1497616987741-7fba8102046e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6dff81312f05df6377b3c70ec70c1de7&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1509335919466-c196457ea95a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd7953dd1357165f722daaa392708fad&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3dd4e03b7ee0a4a60d5f34e0cc11a66c&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5ecaef0464fc50a866e74a6176c3fdc&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=032360c7b684868000973387b861b854&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a94d8eeeab21910577f3aa06616c2a3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aee95d9fe8925d8a4ef01e22c04e714c&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1489643658557-a45d05e2a3dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2230e6e5b8147e317ffd6e873845e79d&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35c5eed8ff61725f3d99f43db88afa4e&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2891f249f4ef797292704c77ab664a59&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8cff69411c70eaa6b342ed148a19703f&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eaf6616c9026d7a0d937a5391b64830a&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1458063048042-fa854e05b745?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=593468aa25f3123d07a84bf75468ce3f&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c65a3c5ece6aa00868a811993ac7ef5&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1526f9922846871b29cbdacf259c5449&auto=format&fit=crop&w=500&q=60'
  ];
  let labelsArr = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];
  this.labelsArr = labelsArr;
  let props = {};
  props.imagesArr = imagesArr;
  if (this.state.passLabels) {
    props.labelsArr = labelsArr;
  }
  if (this.state.passWidth) {
    props.width = this.state.width;
  }
  if (this.state.passHeight){
    props.height = this.state.height;
  }
  if (this.state.passItemRatio) {
    props.itemRatio = `${this.state.itemRatio.x}:${this.state.itemRatio.y}`;
  }
  if (this.state.passBackground) {
    props.background = this.state.background;
  }
  props.direction = this.state.direction;
  let demoStyle = {};
  if (this.state.direction === 'vertical') {
    demoStyle['flexDirection'] = 'row';
  } else {
    demoStyle['flexDirection'] = 'column';
  }
    return (
        <div className="container-fluid" style={{ marginTop: "4.5rem" }}>
        <div className="demo" style={demoStyle}>
        
        <CoverFlow {...props} />
      </div>
        <Row style={{ marginTop: "2rem" }}>
          <Col md="10">
          
        <Row>
        <Col md="3">
        <a class="detail-link" href="/detail">

            <View>
            <img
                src="https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Watch</p>
            </Mask>
            </View>
        </a>
        </Col>
        <Col md="3">
        <a class="detail-link" href="/detail">
            <View>
            <img
                src="https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">Social</p>
            </Mask>
            </View>
            </a>
        </Col>
        <Col md="3">
        <a class="detail-link" href="/detail">
            <View>
            <img
                src="https://t.scdn.co/images/8e508d7eb5b843a89c368c9507ecc429.jpeg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">News</p>
            </Mask>
            </View>
            </a>
        </Col>
        <Col md="3">
        <a class="detail-link" href="/detail">
            <View>
            <img
                src="https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg"
                className="img-fluid"
                alt=""
            />
            <Mask overlay="black-strong" className="flex-center">
                <p className="white-text">About Us</p>
            </Mask>
            </View>
            </a>
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
            </MDBListGroup>
        </Col>
        </Row>
        </div>
    );
  }
}

export default Music;
