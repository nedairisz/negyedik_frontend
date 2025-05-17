export default function Recept({ adat }) {
  return (
    <tr>
      <td>{adat.nev}</td>
      <td>{adat.kategoriak?.nev}</td>
      <td>
        
        <img
          src={
            adat.kepUrl
              ? `http://localhost:8000/kepek/${adat.kepUrl}`
              : "/placeholder.png"
          }          
          style={{ maxWidth: "80px", maxHeight: "80px", objectFit: "cover" }}
          onError={(e) => {
            e.target.src = "/placeholder.png";
          }}
        />
       
      </td>
    </tr>
  );
}
