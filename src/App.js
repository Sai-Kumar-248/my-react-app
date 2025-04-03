import { useEffect, useState } from "react";

const API_URL = "https://web-production-052ff.up.railway.app/users";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(err => {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Try refreshing the page.");
      });
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
