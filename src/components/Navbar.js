import React from 'react';
import favoriteContext from '../contexts/favoriteContext';

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(favoriteContext);

  let imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-img" />
      </div>
      <button className="counter-container">
        &#10084;&#65039; {favoritePokemons.length}
      </button>
      <div />
    </nav>
  );
};

export default Navbar;
