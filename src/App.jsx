import "./App.css";
import { useState } from "react";
import { Login, Navbar } from "@fredwe/frk-1-components";
import Apple from "./Apple";
import Pear from "./Pear";
import Banana from "./Banana";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [happyMessage, setHappyMessage] = useState("");
  const [renderedComponent, setRenderedComponent] = useState(null);
  const [category, setCategory] = useState(null);

  const loginHandler = () => {
    setHappyMessage("IT WOOOORKS!!!!!");
  };

  //denna kategori sätts baserat på vilken flik man är inne på.
  const categorySetter = (title) => {
    setCategory(title);
  };

  //när man trycker på plus sätts rätt komponent baserat på kategorivärde.
  const renderComponent = (title) => {
    switch (title) {
      case "äpple":
        setRenderedComponent(<Apple />);
        break;
      case "päron":
        setRenderedComponent(<Pear />);
        break;
      case "banan":
        setRenderedComponent(<Banana />);
        break;
      default:
        setRenderedComponent(null);
    }
  };

  return (
    <>
      /* navbar tar emot funktionen till plusknappen som sätter rätt komponent*/
      <Navbar renderComponent={() => renderComponent(category)} />
      /* Simulerar flikmenyn, baserat på vad man klickar sätter vi vald
      kategori*/
      <button onClick={() => categorySetter("äpple")}>äpple</button>
      <button onClick={() => categorySetter("päron")}>päron</button>
      <button onClick={() => categorySetter("banan")}>banan</button>
      {category}
      <div>
        <div>{renderedComponent}</div>
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
