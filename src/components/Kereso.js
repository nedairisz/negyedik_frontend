import { useState } from "react"


export default function Kereso(){

    const [kategoria, setKategoria] = useState({
        nev: "",
    })

    return(
        <form>

            <label>Válasszon kategóriát</label>
            <select name="kategoria" value={kategoria.nev} nChange={handleChange}>

                    <option value="">-- Válassz kategóriát --</option>
                        {kategoriakLista?.map((kategoriak) => (
                    <option key={kategoriak.id} value={kategoriak.nev}>{kategoriak.nev}</option>
                ))}       
            </select>
        </form>
    )
}