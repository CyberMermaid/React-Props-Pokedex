import React from 'react';
import { Pokedex } from './Pokedex.js';

const App = () => {
  return (
    <div>
      <Pokedex/>
    </div>
  );
}

export default App;

ReactDOM.render(<App/>, document.getElementById("root"))