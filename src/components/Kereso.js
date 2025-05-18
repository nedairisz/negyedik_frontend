import { useState } from "react";
import useApiContext from "../contexts/ApiContext";
import axios from "../contexts/Axios";

export default function Kereso({ kategoriakLista }) {
  
  const { setReceptLista } = useApiContext();
  const [kivalasztottKategoriaNev, setKivalasztottKategoriaNev] = useState();

  const handleChange = async (esemeny) => {
    const nev = esemeny.target.value;
    setKivalasztottKategoriaNev(nev);

    if (nev === "") {
      const valasz = await axios.get("/receptek");
      setReceptLista(valasz.data);
    } else {
      const kategoria = kategoriakLista.find(k => k.nev === nev);
      if (kategoria?.id) {
        const valasz = await axios.get(`/kategoriak/${kategoria.id}/receptek`);
        setReceptLista(valasz.data.receptek || []);
      }
    }
  };

  return (
    <form className="form-inline">
      <label>Válassz kategóriát:</label>
      <select onChange={handleChange} defaultValue="">
        <option value="">-- Összes recept --</option>
        {kategoriakLista?.map((kategoria) => (
          <option key={kategoria.id} value={kategoria.nev}>
            {kategoria.nev}
          </option>
        ))}
      </select>
    </form>
  );
}
