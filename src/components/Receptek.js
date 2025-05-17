import Recept from "./Recept";
import useApiContext from "../contexts/ApiContext";
import Kereso from "./Kereso";
import Megjelenito from "./Megjelenito";
import { useState } from "react";

export default function Receptek() {
const { receptLista, kategoriakLista } = useApiContext();



// ...
const [kivalasztottRecept, setKivalasztottRecept] = useState(null); 

  return (
    <div>
      <Kereso kategoriakLista={kategoriakLista} />

      <table>
        <thead>
          <tr>
            <td>Cím</td>
            <td>Kategórai</td>
          </tr>
        </thead>
        <tbody>
         {receptLista.map((elem) => (
            <Recept key={elem.id} adat={elem}  onKattintas={() => setKivalasztottRecept(elem)}/>
          ))}
        </tbody>
      </table>
      <Megjelenito recept={kivalasztottRecept} />
      </div>
      
    
  );
}
