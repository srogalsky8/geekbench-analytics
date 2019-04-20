import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Device from "./Device";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Header /> */}
          <Route exact path="/" component={Home} />
          <Route path="/device" component={Device} />
        </div>
      </Router>
    );
  }
}

export default App;