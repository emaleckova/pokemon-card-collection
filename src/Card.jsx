const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <h3>{pokemon.name}</h3>
      <h5>({pokemon.type})</h5>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />

      <p>Hit Points: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
    </div>
  );
};

export default Card;
