import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./user/User";
import Post from "./post/Post";
import { Route, Link } from "react-router-dom";
import Request from "./lib/Request";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    name: "Salmon"
  };

  onNameChange = name => {
    this.setState({ name: name });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>Hello {name}</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">User</Link>
          <Link to="/posts">Post</Link>
        </div>
        <Route
          path="/users"
          component={() => (
            <Request url="http://jsonplaceholder.typicode.com/users">
              {data => <User data={data} />}
            </Request>
          )}
        />
        <Route
          path="/posts"
          component={() => (
            <Request url="http://jsonplaceholder.typicode.com/posts">
              {data => <Post data={data} />}
            </Request>
          )}
        />
      </div>
    );
  }
}

export default App;
