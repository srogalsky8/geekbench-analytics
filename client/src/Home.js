import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the home page</h1>
        <ul>
          <li><Link to="/device-1/">Device 1</Link></li>
          <li><Link to="/device-2/">Device 2</Link></li>
          <li><Link to="/device-3/">Device 3</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;