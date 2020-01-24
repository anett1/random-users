import React from "react";
import "./UserList.css";
const UserList = props => {
  const user = props.users.map(user => (
    <div key={user.login.uuid}>
      <img className="divImage" src={user.picture.large} alt={user.name.last} />
      <h3>{`imie: ${user.name.first} ${user.name.last} `}</h3>
      <p>{user.email}</p>
    </div>
  ));

  return <div className="user">{user}</div>;
};

export default UserList;
