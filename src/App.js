import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  // return createElement('div', { id: 'something-important' }, [
  //   createElement('h1', {}, 'Adopt me!'),
  //   createElement(Pet, {
  //     name: 'Luna',
  //     animal: 'Dog',
  //     breed: 'Havanese',
  //   }),
  //   createElement(Pet, {
  //     name: 'Pepper',
  //     animal: 'Bird',
  //     breed: 'Cockatiel',
  //   }),
  //   createElement(Pet, {
  //     name: 'Doink',
  //     animal: 'Cat',
  //     breed: 'Mixed',
  //   }),
  // ]);
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
