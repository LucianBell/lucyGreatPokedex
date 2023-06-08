import React from "react";
import SearchAppBar from "@/components/navBar";
import styles from "@/styles/Home.module.scss";

export default function Pokemon({ pokemon }: any) {
  const renderStats = () => {
    return pokemon.stats.map((stat: any, index: any) => {
      <div
        key={index}
        className={styles.statBox}
        style={{ width: `${stat.base_stat}%` }}
      >
        {stat.base_stat}
      </div>;
    });
  };

  const rightHeight = pokemon.height * 10;

  const rightPokemonIndex = ("000" + pokemon.id).slice(-3);

  return (
    <>
      <main>
        <SearchAppBar />
        <p className={styles.indexTitle}>{rightPokemonIndex}</p>
        <img
          src={pokemon.sprites.front_default}
          className={styles.sprite}
        ></img>
        <h1 className={styles.pokemonName}>{pokemon.name}</h1>
        <h2 className={styles.importantDataTitle}>Important Data</h2>

        <ul className={styles.listData}>
          <li>Weight: {pokemon.weight} kilos</li>
          <li>Height: {rightHeight} centimeters</li>
        </ul>

        <div className={styles.divPage}>
          <h2 className={styles.importantDataTitle}>Stats</h2>
          {renderStats()}

          <h2 className={styles.importantDataTitleShiny}>Shiny Variation:</h2>
        </div>
        <img
          src={pokemon.sprites.front_shiny}
          alt="Pokemon's shiny version"
          className={styles.shinySprite}
        />
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
