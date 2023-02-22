import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Contact() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Contact</h2>
      {user ? <p> {user}</p> : <p> please, log in for more details</p>}
    </div>
  );
}
