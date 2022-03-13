import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import os from "os";

export default function HomeScreen() {
  const domain = process.env.REACT_APP_API_URL;
  const url = domain + "/user/list";
  console.log(url);
  const [users, setUsers] = useState([]);
  const userInputRef = useRef()
  const phoneInputRef = useRef()
  const getUsers = () => {
    axios
      .get(url)
      .then((response) => {
        const usersData = response.data.users;
        console.log(response.data);
        setUsers(usersData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: userInputRef.current.value,
      phone: phoneInputRef.current.value
  }
    axios.post(domain + '/user/add', data);
    window.location.reload(false);
  }

  const deleteHandler = async (id) => {

    await axios.delete(domain+'/user/' + id);
    window.location.reload(false);
  }

  useEffect(() => getUsers(), []);
  
  return (
    <div>
      <header className="container">Node's Hostname: {os.hostname()}</header>

      <div className="container post-submit">
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input ref={userInputRef} type="text" name="name" />
          &nbsp;
          Phone:
          <input ref={phoneInputRef} type="text" name="Phone" />
        </label>
        <input type="submit" value="Add" />
      </form>
      </div>

      <div className="container table-overflow">
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td><button onClick = {() =>{deleteHandler(user.user_id)}}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
      
  );
}
