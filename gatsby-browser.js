import React, { Component } from "react";
import Header from "./src/components/header";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
  return (
    <div className="testWrapper">
      <PageWrapper props={props} element={element} />
    </div>
  );
};

class PageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibility: true,
      activeNavbarItem: "",
    };
  }

  selectMenuItem = e =>
    this.setState({
      activeNavbarItem: e.target.getAttribute("data-heading"),
    });

  toggleMenu = e =>
    this.setState({
      menuVisibility: !this.state.menuVisibility,
    });

  render() {
    const { props, element } = this.props;
    const { menuVisibility, activeNavbarItem } = this.state;
    return (
      <>
        <Header
          menuVisibility={menuVisibility}
          activeNavbarItem={activeNavbarItem}
          menuToggleHandler={this.toggleMenu}
          onClickHandler={this.selectMenuItem}
        />
        <Layout {...props}>{element}</Layout>
      </>
    );
  }
}
