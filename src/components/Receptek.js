import Recept from "./Recept";
import useApiContext from "../contexts/ApiContext";
import Kereso from "./Kereso";
import Megjelenito from "./Megjelenito";
import { useState } from "react";
import "./Receptek.css";

export default function Receptek() {
  const { receptLista, kategoriakLista } = useApiContext();

  const [kivalasztottRecept, setKivalasztottRecept] = useState();

  return (
    <div>
      <Kereso kategoriakLista={kategoriakLista} />

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Cím</th>
            <th scope="col">Kategória</th>
            <th scope="col">Kép</th>
          </tr>
        </thead>
        <tbody>
          {receptLista.map((elem) => (
            <Recept
              key={elem.id}
              adat={elem}
              onKattintas={() => setKivalasztottRecept(elem)}
            />
          ))}
        </tbody>
      </table>
      <div className="megjelenito">
        <Megjelenito recept={kivalasztottRecept} />
      </div>
    </div>
  );
}
