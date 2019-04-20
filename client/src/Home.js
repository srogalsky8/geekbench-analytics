import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the home page</h1>
        <ul>
          <li><Link to="/device/">Device 1</Link></li>
          <li>Device 2</li>
          <li>Device 3</li>
        </ul>
      </div>
    );
  }
}

export default Home;