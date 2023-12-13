import React from 'react';
import { Pokecard } from './Pokecard';

class Pokedex extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Pokecard />
        </div>
      );
    }
  };
  