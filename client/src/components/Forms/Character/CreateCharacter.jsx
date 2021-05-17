import { useState } from 'react';
import { createCharacter } from '../../../services/apiConfig';
import { useHistory } from 'react-router-dom';
import './CreateCharacter.css';

export default function CreateCharacter(props) {
  const [input, setInput] = useState({});

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createCharacter(props.currentUser.id, input);
    props.setCurrentCharacter(res);
    history.push('/');
  }

  return (
    <div>
      <h2 id="character-container-title">Create Your Character</h2>
      <form id="character-container" onChange={handleChange} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={input.name} />
        <label>Race:</label>
        <input name="race" type="text" value={input.race} />
        <label>Class:</label>
        <input name="character_class" type="text" value={input.character_class} />
        <label>Image URL:</label>
        <input name="img_url" type="text" value={input.img_url} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
