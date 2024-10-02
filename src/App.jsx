import "./App.css";
import { useState } from "react";
import { Login } from "@fredwe/frk-1-components";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [happyMessage, setHappyMessage] = useState("");

  const loginHandler = () => {
    setHappyMessage("IT WOOOORKS!!!!!");
  };

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Login
          setUser={setUser}
          setPassword={setPassword}
          loginHandler={loginHandler}
          buttonText="Logga in"
        />
        {user}
        {password}
        <h3>{happyMessage || "undrar om det fungerar?"}</h3>
      </div>
    </>
  );
}

export default App;
