import React, { useEffect, useState } from "react";

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

const PokemonInfo = (props) => {
  const {
    pokemonName,
    pokemonImg,
    pokemonWeight,
    pokemonAbility,
    pokemonDesc,
    setModal,
  } = props;

  const [dataPokemon, setDataPokemon] = useState({ name: "", img: "" });

  useEffect(() => {
    ipcRenderer.on("send-info", (e, arg) => {
      console.log(arg);
      setDataPokemon({
        name: arg.name,
        img: arg.sprites.front_default,
        weight: arg.weight,
      });
    });
  }, []);

  const closeModal = (e) => {
    e.stopPropagation();
    setModal(false);
  };

  return (
    <div className="pokemon-modalInfo" onClick={closeModal}>
      <div className="pokemon-cardModal">
        <h2 className="pokemon-title">{dataPokemon.name} Info</h2>
        <div className="pokemon-modal-img">
          <img src={dataPokemon.img} alt="img-pokemon" />
        </div>
        <div className="pokemon-data">
          <div>
            <span>
              <b>Nombre:</b> {dataPokemon.name}
            </span>
          </div>
          <div>
            <span>
              <b>Peso:</b> {dataPokemon.weight} Kg
            </span>
          </div>
          {/* <div>
            <span>
              <b>Habilidad:</b>
            </span>
            {pokemonAbility.map((item) => {
              return <span key={item.ability.name}> {item.ability.name},</span>;
            })}
          </div> */}
          <div className="pokemon-des-title">
            <b>Descripción:</b>
          </div>
          {/* <div className="pokemon-desc">{pokemonDesc}</div> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
