import React, { component, Component } from "react";
import axios from "axios";
import withRequest from "../lib/withRequest";

class Post extends Component {
  // constructor() {
  //   super();
  //   console.log("constructor");
  state = {
    data: []
  };

  //   async componentDidMount() {
  //     const result = await axios.get("http://jsonplaceholder.typicode.com/posts");
  //     this.setState({ data: result.data });
  //   }

  //   onChange = event => {
  //     this.props.onNameChange(event.target.value);
  //   };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>UserId</td>
              <td>Id</td>
              <td>title</td>
              <td>body</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data === undefined ? (
              <div />
            ) : (
              this.props.data.map(post => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRequest("http://jsonplaceholder.typicode.com/posts")(Post);
