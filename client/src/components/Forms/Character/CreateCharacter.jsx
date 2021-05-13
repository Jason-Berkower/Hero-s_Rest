import { useState } from 'react';
import { createCharacter } from '../../../services/apiConfig';
import './CreateCharacter.css';

export default function CreateCharacter() {
  const [input, setInput] = useState({});

  return (
    <div>
      <h2>Create Your Character</h2>
      <form id="character-container" onChange={handleChange} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={input.name} />
        <label>Race:</label>
        <input name="race" type="text" value={input.race} />
        <label>Class:</label>
        <input name="class" type="text" value={input.class} />
        <label>Image URL:</label>
        <input name="img_url" type="text" value={input.img_url} />
        <button type="submit" />
      </form>
    </div>
  )
}
