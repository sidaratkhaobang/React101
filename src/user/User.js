import React, { component, Component } from "react";
import axios from "axios";
import withRequest from "../lib/withRequest";


class User extends Component {
  // constructor() {
  //   super();
  //   console.log("constructor");
  state = {
    data: []
  };

  // async componentDidMount() {
  //   const result = await axios.get("http://jsonplaceholder.typicode.com/users");
  //   this.setState({ data: result.data });
  // }

  // onChange = event => {
  //   this.props.onNameChange(event.target.value);
  // };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data === undefined ? (
              <div />
            ) : (
              this.props.data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
