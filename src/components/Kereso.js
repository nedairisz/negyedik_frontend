import useApiContext from "../contexts/ApiContext";
import axios from "../contexts/Axios";

export default function Kereso({ kategoriakLista }) {
  const { setReceptLista } = useApiContext();

  const handleChange = async (esemeny) => {
    const kivalasztottKategoriaNev = esemeny.target.value;

    if (kivalasztottKategoriaNev === "") {
      const valasz = await axios.get("/receptek");
      setReceptLista(valasz.data);
    } else {
      const kivalasztottKategoria = kategoriakLista.find(
        (kategoria) => kategoria.nev === kivalasztottKategoriaNev
      );

      if (kivalasztottKategoria?.id) {
        const valasz = await axios.get(
          `/kategoriak/${kivalasztottKategoria.id}/receptek`
        );
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
