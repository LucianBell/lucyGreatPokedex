import React from "react";
import SearchAppBar from "@/components/navBar";

export default function Pokemon({ pokemon }: any) {
  const renderStats = () => {
    return pokemon.stats.map((stat: any, index: any) => {
      <div key={index} className="actionArea">
        {stat.base_stat}
      </div>;
    });
  };

  return (
    <>
      <main>
        <SearchAppBar />
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.front_default}></img>
        <h1>{pokemon.name}</h1>
        <h2>Important Data</h2>

        <ul>
          <li>Weight: {pokemon.weight} kilos</li>
        </ul>

        <h2>Stats</h2>
        {renderStats()}
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );

  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}
