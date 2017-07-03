import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as accountSelectors from "../store/account/reducer";
import * as accountActions from "../store/account/actions";
import styled from "styled-components";
import SidebarNav from "../components/SidebarNav";
import Identity from "../components/Identity";
import UserDetails from "../components/UserDetails";

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
`;

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <MainWrapper>
        <SidebarNav />
        <UserDetails />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DashboardScreen);
