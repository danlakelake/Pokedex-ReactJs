import React, { useState } from "react";

const PokemonInfo = (props) => {
  const { pokemonName, pokemonImg, setInfo } = props;
  console.log(props);
  console.log(setInfo);

  const clickHideModal = () => {
    alert("hide modal");
    setInfo(false);
  };

  return (
    <div id="modal" className="pokemon-modalInfo" onClick={clickHideModal}>
      <div className="pokemon-cardModal">
        <h3 className="pokemon-title">{pokemonName.name} Info</h3>
        <div className="pokemon-modal-img">
          <img src={pokemonImg.sprites.front_default} alt="img-pokemon" />
        </div>
        <span className="pokemon-data">
          Nombre: {pokemonName.name.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default PokemonInfo;
