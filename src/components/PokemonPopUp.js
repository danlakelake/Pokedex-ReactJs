import React from "react";

const PokemonInfo = (props) => {
  const { pokemonName, pokemonImg, pokemonWeight, pokemonAbility, setInfo } =
    props;

  const clickCard = (e) => {
    e.stopPropagation();
    setInfo(false);
  };

  return (
    <div className="pokemon-modalInfo" onClick={clickCard}>
      <div className="pokemon-cardModal">
        <h2 className="pokemon-title">{pokemonName} Info</h2>
        <div className="pokemon-modal-img">
          <img src={pokemonImg} alt="img-pokemon" />
        </div>
        <div className="pokemon-data">
          <div>
            <b>Nombre:</b> {pokemonName}
          </div>
          <div>
            <b>Peso:</b> {pokemonWeight} Kg
          </div>
          <div>
            <b>Habilidad:</b>
            {pokemonAbility.map((item) => {
              return <span> {item.ability.name},</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
