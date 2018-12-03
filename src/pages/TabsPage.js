import React from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import classnames from "classnames";

class TabsPage extends React.Component {

  state = {
    activeItemClassicTabs1: "1",
  }

  toggleClassicTabs1 = (tab) => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }

  render() {
    return (
        <MDBContainer>
        <div className="classic-tabs">
          <MDBNav classicTabs color="cyan">
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={classnames({
                  active: this.state.activeItemClassicTabs1 === "1"
                })}
                onClick={() => {
                  this.toggleClassicTabs1("1");
                }}
              >
                Profile
                      </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={classnames({
                  active: this.state.activeItemClassicTabs1 === "2"
                })}
                onClick={() => {
                  this.toggleClassicTabs1("2");
                }}
              >
                Follow
                      </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={classnames({
                  active: this.state.activeItemClassicTabs1 === "3"
                })}
                onClick={() => {
                  this.toggleClassicTabs1("3");
                }}
              >
                Contact
                      </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                className={classnames({
                  active: this.state.activeItemClassicTabs1 === "4"
                })}
                onClick={() => {
                  this.toggleClassicTabs1("4");
                }}
              >
                Be Awesome
                      </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="card"
            activeItem={this.state.activeItemClassicTabs1}
          >
            <MDBTabPane tabId="1">
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nihil odit magnam minima,
                soluta doloribus reiciendis molestiae placeat unde eos
                molestias.
                      </p>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
                Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
                      </p>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <p>
                Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nihil odit magnam minima,
                soluta doloribus reiciendis molestiae placeat unde eos
                molestias.
                      </p>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Nihil odit magnam minima, soluta doloribus
                reiciendis molestiae placeat unde eos molestias.
                Quisquam aperiam, pariatur. Tempora, placeat ratione
                porro voluptate odit minima.
                      </p>
            </MDBTabPane>
          </MDBTabContent>
        </div>
      </MDBContainer>
    );
  }
}

export default TabsPage;