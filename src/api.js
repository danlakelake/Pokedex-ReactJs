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
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postApiLogin = async (name, password) => {
  try {
    const url = "https://pruebasmorpheus.com:16070/usuario/login/oficina";
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        nick: name,
        pass: password,
      }),
    });
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postAuthLogin = async (user_id, key) => {
  try {
    const url = "https://pruebasmorpheus.com:16070/usuario/auth";
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        id: user_id,
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        key: key,
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
