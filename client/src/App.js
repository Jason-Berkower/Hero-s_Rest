import { Navbar } from "./components/Navigation/Navbar";
import { SignIn } from "./components/SignUp/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Footer } from "./components/Footer/Footer";
import { CreateCharacter } from "./components/Forms/Character/CreateCharacter";
import { CreatePost } from "./components/Forms/Posts/CreatePost";
import { CreateComment } from "./components/Forms/Comments/CreateComment";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user);
  };

  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="">
          <CreateCharacter />
        </Route>
        <Route path="">
          <CreatePost />
        </Route>
        <Route path="">
          <CreateComment />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
