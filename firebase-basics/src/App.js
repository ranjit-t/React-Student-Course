import "./App.css";
import React, { useEffect, useState } from "react";
import { projectFireStore } from "./config";

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Fetching from Firestore
  useEffect(() => {
    let results = [];
    projectFireStore
      .collection("users")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(results);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Adding to  Firestore

    if (username.length !== 0 && password.length !== 0) {
      let results = { username: username, password: password };
      projectFireStore.collection("users").add(results);
      setPassword("");
      setUsername("");
      alert("registered");
    } else {
      alert("enter all field");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username :
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            value={username}
          />
        </label>
        <label>
          Password :
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <button>submit</button>
      </form>

      {data.map((user) => {
        return (
          <div key={user.id}>
            <section>
              <b>Username : </b>
              {user.username}
            </section>
            <section>
              <b>Password : </b>
              {user.password}
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default App;
