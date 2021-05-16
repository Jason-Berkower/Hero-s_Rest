import Navbar from "./components/Navigation/Navbar";
import SignIn from "./components/SignUp/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import CreateCharacter from "./components/Forms/Character/CreateCharacter";
import CreatePost from "./components/Forms/Posts/CreatePost";
import CreateComment from "./components/Forms/Comments/CreateComment";

import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  // useEffect(() => {
  //   verify();
  // }, []);

  // const verify = async () => {
  //   let user = await verifyUser();
  //   setCurrentUser(user);
  // };

  return (
    <div className="App">
      <Navbar currentUser={currentUser} currentCharacter={currentCharacter} />
      <Switch>
        <Route exact path="/signup">
          <SignUp setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signin">
          <SignIn setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/character-creation">
          <CreateCharacter
            currentUser={currentUser}
            setCurrentCharacter={setCurrentCharacter}
          />
        </Route>
        <Route path="/post-creation">
          <CreatePost
            currentUser={currentUser}
            currentCharacter={currentCharacter}
          />
        </Route>
        <Route path="/comment-creation">
          <CreateComment
            currentUser={currentUser}
            currentCharacter={currentCharacter}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
