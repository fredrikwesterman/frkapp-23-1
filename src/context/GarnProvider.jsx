import { createContext } from "react";

export const GarnContext = createContext();

const GarnProvider = (props) => {
  return (
    <>
      <GarnContext.Provider value={{}}>{props.children}</GarnContext.Provider>
    </>
  );
};

export default GarnProvider;
