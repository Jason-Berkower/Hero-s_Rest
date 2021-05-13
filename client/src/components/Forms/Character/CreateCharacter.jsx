import { useState } from 'react';
import { createCharacter } from '../../../services/apiConfig';
import './CreateCharacter.css';

export default function CreateCharacter() {
  const [input, setInput] = useState({});

  return (
    <div>
      <h2>Create Your Character</h2>
      <form id="character-container">
        <label>Name:</label>
        <input type="text" value="name" />
      </form>
    </div>
  )
}
