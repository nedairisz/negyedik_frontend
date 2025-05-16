export default function Receptek() {
  return (
    
      <table>
        <thead>
          <tr>
            <td>Cím</td>
            <td>Kategórai</td>            
          </tr>
        </thead>
        <tbody>
        {receptekLista.map((elem) => (
          <Recept key={elem.id} adat={elem} />
        ))}
        </tbody>
      </table>
      
    
  );
}
