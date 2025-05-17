export default function Megjelenito({ recept }) {
  if (!recept) {
    return <p>Válassz egy receptet!</p>;
  }

  return (
    <div >
      <h2>{recept.nev}</h2>
      <p>{recept.leiras}</p>
      <img
        src={
          recept.kepEleresiUt
            ? `http://localhost:8000/kepek/${recept.kepEleresiUt}`
            : "/placeholder.png"
        }
        style={{ maxWidth: "300px", maxHeight: "300px", objectFit: "cover" }}
        onError={(e) => {
          e.target.src = "/placeholder.png";
        }}
        alt={recept.nev}
      />
    </div>
  );
}
