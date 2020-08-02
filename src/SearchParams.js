import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  // location is a piece of state and setLocation is an updater for that
  // particular piece of state.
  const [location, setLocation] = useState('Seattle, WA');
  // The breeds array will constantly change depending on the animal the user selects
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    // If there are already any breeds in the array, we want to clear them
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
    // On the next line we are declaring the variables on which useEffect depends
    // this will prevent useEffect from running with every single render
    // The order of these things doesn't matter, it's just a list that React will check.
    // If any of these things changes, React reruns useEffect after it renders.
    // NOTE: If you want to run the effect only once, you pass an []
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
