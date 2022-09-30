import React, { useContext, useState } from "react";
import favoriteContext from "../contexts/favoriteContext";
import PokemonInfo from "../components/PokemonPopUp";

const Pokemon = (props) => {
  const [info, setInfo] = useState(false);
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(favoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  console.log(info);
  const clickCard = (e) => {
    e.preventDefault();
    setInfo(true);
  };

  const clickHeart = (e) => {
    e.preventDefault();
    heart == blackHeart
      ? alert(`Agregaste ${pokemon.name} como favorito`)
      : alert(`Eliminaste ${pokemon.name} como favorito`);
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div onClick={clickCard} className="pokemon-card">
      {info === true ? (
        <PokemonInfo
          pokemonName={pokemon}
          pokemonImg={pokemon}
          setInfo={setInfo}
        />
      ) : null}
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Pokemon;
