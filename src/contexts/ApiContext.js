import { createContext, useContext, useState, useEffect } from "react";
import axios from "./Axios.js";

export const ApiContext = createContext({
  receptLista: [],
  postAdat: () => {},
  getLista: () => {},
  setReceptLista: () => {},
});

export const ApiProvider = ({ children }) => {
  const [receptLista, setReceptLista] = useState([]);

  const getLista = async (vegpont, callback) => {
    const { data } = await axios.get(vegpont);
    callback(data);
  };

  useEffect(() => {
    getLista("api/receptek", setReceptLista);
    getLista("api/receptek", receptLista);
  }, []);

  const postAdat = async (adat, vegpont) => {
    try {
      await axios.post(vegpont, adat);
      getLista("api/receptek", setReceptLista);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{ receptLista, postAdat, getLista, setReceptLista }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default function useApiContext() {
  return useContext(ApiContext);
}
