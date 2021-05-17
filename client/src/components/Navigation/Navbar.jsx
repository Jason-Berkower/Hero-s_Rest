import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {

  const { currentUser, currentCharacter } = props

  return (
    <div>
      <h1 id='nav-title'>HERO'S REST</h1>
      {currentUser && <h4 id='user-welcome'>Welcome, {currentUser.username}!</h4>}
      <div id='links'>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
        {currentUser && <Link to='/character-creation'>Create A Character</Link>}
        {currentCharacter && <Link to='/post-creation'>Make a Post</Link>}
        {currentCharacter && <Link to='/comment-creation'>Make a Comment</Link>}
      </div>
    </div>
  )
}
