import React from 'react';

// Display a single Pokemon with their name, image, and type
const Pokemon= (props) => {
    return <div> 
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name}/>
        <h3>{props.type}</h3>
    </div>
 };

// const { name, image, type } = this.props;


class Pokecard extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Pokemon/>
      );
    }
  }

export {Pokecard}