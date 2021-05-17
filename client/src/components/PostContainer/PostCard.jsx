import { updatePost, deletePost } from '../../services/apiConfig';
import { useState, useEffect } from 'react';
import './PostCard.css';

export default function PostCard(props) {
  const [editOpen, setEditOpen] = useState(false);
  const [input, setInput] = useState({});

  useEffect(() => {
    setInput(props.post);
  }, [props.post]);

  const handleDelete = async () => {
    await deletePost(props.post.id);
    props.setToggle(p => !p);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updatePost(props.post.user_id,
      props.post.character_id,
      props.post.id,
      {
        title: input.title,
        content: input.content,
      });
    props.setToggle();
    setEditOpen(false);
  };

  return (
    <div id="post-card">
      <h3>{props.post.title}, by {props.post.character.name}</h3>
      <p>{props.post.content}</p>
      <sub onClick={handleDelete}>X</sub> <sub onClick={() => setEditOpen(p => !p)}>EDIT</sub>
      {editOpen && <div>
        <h2>Edit Me!</h2>
        <form id="post-container" onSubmit={handleUpdate}>
          <label>Title:</label>
          <input name="title" type="text" value={input.title} onChange={handleChange} />
          <label>Content:</label>
          <input name="content" type="textarea" value={input.content} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>}
    </div>
  )
}
