import Recept from "./Recept";
import useApiContext from "../contexts/ApiContext";
export default function Receptek() {

    const{receptLista}=useApiContext
  return (
    
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
      
    
  );
}
