import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Homepage() {
  const { user, setUser, recipes } = useContext(UserContext);
  return (
    <div>
      <h2>Homepage</h2>
      <p> {user}</p>
      {!user ? (
        <div>
          <p>Please, Login to see Recipes</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setUser("Welcome, Ran");
            }}
          >
            log in
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setUser("");
            }}
          >
            log out
          </button>
          <h2>Here is the List of Recipes</h2>
          <div>
            {recipes.map((recipe) => {
              return (
                <div key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.method}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
