import React from "react";
import "./App.css";
import ButtonFetchUser from "./ButtonFetchUser";
import UserList from "./UserList";
import "../index.css";

const API = "https://randomuser.me/api/?results=1";

class App extends React.Component {
  state = {
    users: []
  };

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("blad");
      })
      .then(response => response.json())
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(error => console.log(error));
  };
  render() {
    const users = this.state.users;
    return (
      <div className="container">
        <ButtonFetchUser click={this.handleDataFetch} />
        {users.length > 0 ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
