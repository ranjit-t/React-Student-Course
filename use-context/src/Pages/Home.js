import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <p>{user}</p>
      {!user ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser("Ranjit");
          }}
        >
          login
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser("");
          }}
        >
          logout
        </button>
      )}
    </div>
  );
}
