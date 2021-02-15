import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import CommunityMain from "./Pages/CommunityMain/CommunityMain";
import Mypage from "./Pages/MyPage/MyPage";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductMain from "./Pages/ProductMain/ProductMain";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/communitymain" component={CommunityMain} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/productmain" component={ProductMain} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
