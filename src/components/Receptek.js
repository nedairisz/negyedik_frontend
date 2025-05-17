import Recept from "./Recept";
import useApiContext from "../contexts/ApiContext";
import Kereso from "./Kereso";
import { useState } from "react";

export default function Receptek() {
  const { receptLista } = useApiContext();

  if (!receptLista) return <div>Betöltés...</div>;

  const kategoriakLista = [
    ...new Map(
      receptLista
        .filter((r) => r.kategoriak)
        .map((r) => [r.kategoriak.id, r.kategoriak])
    ).values(),
  ];

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
            <Recept key={elem.id} adat={elem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
