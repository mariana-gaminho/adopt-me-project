import React from 'react';
export default function Pet({ name, animal, breed }) {
  // Using just React, we would need to write it this way...
  // return createElement('div', {}, [
  //   createElement('h1', {}, name),
  //   createElement('h2', {}, animal),
  //   createElement('h2', {}, breed),
  // ]);

  // Using JSX...
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
