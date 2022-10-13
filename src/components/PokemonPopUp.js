import React, { useEffect, useState } from "react";
import { getPokemonResources } from "../api";

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;

const PokemonInfo = () => {
  const [dataPokemon, setDataPokemon] = useState({
    name: "",
    img: "",
    weight: "",
    ability: [],
    desc: "",
  });

  const getApiDesc = async (id, arg) => {
    try {
      const data = await getPokemonResources(id);
      console.log(data.effect_entries[0].effect);
      setDataPokemon({
        name: arg.name,
        img: arg.sprites.front_default,
        weight: arg.weight,
        ability: arg.abilities,
        desc: data.effect_entries[0].effect,
      });
    } catch (error) {
      console.log(err);
    }
  };

  useEffect(() => {
    ipcRenderer.on("send-info", (e, arg) => {
      getApiDesc(arg.id, arg);
    });
  }, []);

  return (
    <div className="pokemon-modalInfo">
      <div className="pokemon-cardInfo">
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
          <div>
            <span>
              <b>Habilidad:</b>
            </span>
            {dataPokemon.ability.map((item, key) => {
              return <span key={key}>{item.ability.name},</span>;
            })}
          </div>
          <div>
            <b>Descripción:</b>
            {dataPokemon.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
