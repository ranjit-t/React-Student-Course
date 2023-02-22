import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Contact() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Contact</h2>
      <p> {user}</p>
    </div>
  );
}
