import React from "react";

const PokemonInfo = (props) => {
  const {
    pokemonName,
    pokemonImg,
    pokemonWeight,
    pokemonAbility,
    pokemonDesc,
    setModal,
  } = props;

  const closeModal = (e) => {
    e.stopPropagation();
    setModal(false);
  };

  return (
    <div className="pokemon-modalInfo" onClick={closeModal}>
      <div className="pokemon-cardModal">
        <h2 className="pokemon-title">{pokemonName} Info</h2>
        <div className="pokemon-modal-img">
          <img src={pokemonImg} alt="img-pokemon" />
        </div>
        <div className="pokemon-data">
          <div>
            <span>
              <b>Nombre:</b> {pokemonName}
            </span>
          </div>
          <div>
            <span>
              <b>Peso:</b> {pokemonWeight} Kg{" "}
            </span>
          </div>
          <div>
            <span>
              <b>Habilidad:</b>
            </span>
            {pokemonAbility.map((item) => {
              return <span key={item.ability.name}> {item.ability.name},</span>;
            })}
          </div>
          <div className="pokemon-des-title">
            <b>Descripción:</b>
          </div>
          <div className="pokemon-desc">{pokemonDesc}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
