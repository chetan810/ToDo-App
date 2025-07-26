import React, { useEffect, useState } from "react";
import "./pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

//   const fetchPokenom = () => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((data) => {
//         setApiData(data);
//       })
//       .catch((error) => console.log(error));
//   };

  const fetchPokenom = async () => {
     try {
       const res = await fetch(API)
       const data = await res.json()
       setApiData(data)
     } catch (error) {
       console.log(error);
     }
  }

  useEffect(() => {
    fetchPokenom();
  }, []);

  if (!apiData) {
    return (
      <section className="container">
        <h1>Loading Pokémon...</h1>
      </section>
    );
  }

  return (
    <section className="container">
      <header>
        <h1>Let's catch Pokémon</h1>
      </header>

      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={apiData.sprites.other.dream_world.front_default}
              alt={apiData.name}
              className="pokemon-image"
            />
            <figcaption>
              <h2 className="pokemon-name">{apiData.name}</h2>
              <p>
                <strong>Height:</strong> {apiData.height}
              </p>
              <p>
                <strong>Weight:</strong> {apiData.weight}
              </p>
              <p>
                <strong>Abilities:</strong>{" "}
                {apiData.abilities.map((ab, idx) => (
                  <span key={idx}>{ab.ability.name}</span>
                ))}
              </p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};
