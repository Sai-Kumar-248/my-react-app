import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const API_URL = "https://web-production-052ff.up.railway.app/users";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
