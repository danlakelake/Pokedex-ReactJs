import React from "react";

const PokemonInfo = (props) => {
  const { pokemonName, pokemonImg, hideModal } = props;

  const clickHideModal = (e) => {
    e.preventDefault();
    alert("you click hide modal");
    hideModal(false);
  };

  return (
    <div
      id="modal-background"
      className="pokemon-modalInfo"
      onClick={clickHideModal}
    >
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
