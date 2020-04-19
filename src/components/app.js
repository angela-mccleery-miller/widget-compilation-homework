import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation-manager";

import Counter from "./pages/addSub";
import HideMe from "./pages/hideMe";
import AddSub from "./pages/addSub"
import Clock from "./pages/clock";
import Greeting from "./pages/toggleMe";
import ColorChanger from "./pages/colorChanger";
import GrowShrink from "./pages/growShrink";
import MovingText from "./pages/movingText"

// import

export default class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {

    // };
    }

  render() {
    return (
      <div className='app'>
      <div className='app-item-wrapper'>
    
      <Router>
        <div>
          <NavigationContainer/>

        <Switch>
          <Route exact path="/" component={Greeting} />
          <Route path ="/addSub" component={AddSub} />
          <Route path = "/clock" component={Clock} />
          <Route path = "/colorChanger" component={ColorChanger} />
          <Route path ="/growShrink" component={GrowShrink} />
          <Route path = "/hideMe" component={HideMe} />
          <Route path = "/movingText" component={MovingText} />
          <Route exact path = "/toggle-me" component={Greeting} />

        </Switch>
       </div>
      </Router>
      </div>
    </div>

    );
  }
}

