import axios from "axios";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function fetch() {
    const response = await axios
      .get("https://localhost:8080/usuarios", {
        auth: {
          username: "lucas",
          password: "1234",
        },
      })
      .then((response) => response.data);
    setUsers(response);
    console.log(response);
  }
  return (
    <>
      <p>lista de usuarios</p>
      {users.map((user) => (
        <ul>
          <li key={user.id}>
            Nome: {user.nome}
            Email: {user.email}
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
