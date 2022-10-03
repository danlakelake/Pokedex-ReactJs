export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonResources = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/item/${pokemon}/`;
    const response = await fetch(url);
    const data = await response.json();
    data.effect_entries.map((res) => {
      let effect_res = res.effect;
      console.log(effect_res);
    });
    return effect_res;
  } catch (err) {}
};
