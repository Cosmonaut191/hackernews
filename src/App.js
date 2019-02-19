import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    var helloworld = "welcome to the road to learn react";

    return (
      <div className="App">
        <h2>{helloworld}</h2>
      </div>
    );
  }
}

export default App;
