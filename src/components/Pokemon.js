import React, { useContext, useState, useEffect } from "react";
import favoriteContext from "../contexts/favoriteContext";
import PokemonInfo from "../components/PokemonPopUp";
import { getPokemonResources } from "../api";

const Pokemon = (props) => {
  const [info, setInfo] = useState(false);
  const [pokemon_Name, setPokemonName] = useState("");
  const [pokemon_Id, setPokemonId] = useState("");
  const [pokemon_Img, setPokemonImg] = useState("");
  const [pokemon_Weight, setPokemonWeight] = useState("");
  const [pokemon_Ability, setPokemonAbility] = useState("");

  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(favoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  useEffect(() => {
    setPokemonName(pokemon.name);
    setPokemonId(pokemon.id);
    setPokemonImg(pokemon.sprites.front_default);
    setPokemonWeight(pokemon.weight);
    setPokemonAbility(pokemon.abilities);
  }, [pokemon]);

  const clickCard = (e) => {
    e.stopPropagation();
    setInfo(true);
    getPokemonResources();
  };

  const clickHeart = (e) => {
    e.stopPropagation();
    heart == blackHeart
      ? alert(`Agregaste ${pokemon_Name} como favorito`)
      : alert(`Eliminaste ${pokemon_Name} como favorito`);
    updateFavoritePokemons(pokemon_Name);
  };

  return (
    <div onClick={clickCard} className="pokemon-card">
      {info === true ? (
        <PokemonInfo
          pokemonName={pokemon_Name}
          pokemonImg={pokemon_Img}
          pokemonWeight={pokemon_Weight}
          pokemonAbility={pokemon_Ability}
          setInfo={setInfo}
        />
      ) : null}
      <div className="pokemon-img-container">
        <img src={pokemon_Img} alt={pokemon_Name} className="pokemon-img" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon_Name}</h3>
          <div>#{pokemon_Id}</div>
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
