import { useEffect, useRef } from 'react';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import PropTypes from 'prop-types';

export default function SearchBar({ breeds }) {
  const choicesRef = useRef(null);  // Used to ensure Choices.js is initialized once

  // Initialize Choices.js once after dog breed options have been fetched
  useEffect(() => {
    if (choicesRef.current === null && breeds.length > 0) {
      choicesRef.current = new Choices('#breed-select', {
        placeholder: true,
        placeholderValue: 'Search for some cute doggo breeds here!',
        searchEnabled: true,
        removeItemButton: true,
        allowHTML: true
      });
    }
  }, [breeds]); // Runs after breeds have been updated

  return (
    <div className='w-96'>
      <select id="breed-select" multiple>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
    </div>
  );
}

SearchBar.propTypes = {
  breeds: PropTypes.array.isRequired,
};
