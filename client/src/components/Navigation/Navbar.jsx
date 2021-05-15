import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <div>
      <h1>HERO'S REST</h1>
      <div id='links'>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/character-creation'>Create A Character</Link>
        <Link to='/post-creation'>Make a Post</Link>
        <Link to='/comment-creation'>Make a Comment</Link>
      </div>
    </div>
  )
}
