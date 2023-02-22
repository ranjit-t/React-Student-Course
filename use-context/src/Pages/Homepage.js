import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Homepage() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Homepage</h2>
      <p> {user}</p>
      {!user ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser("Ranjit");
          }}
        >
          log in
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser("");
          }}
        >
          log out
        </button>
      )}
    </div>
  );
}
