const Card = ({ pokemon, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <div className="card-bg" style={{ backgroundColor: color }} />
      <div className="card-content">
        <h3>{pokemon.name}</h3>
        <h5>{pokemon.type}</h5>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />

        <p>Hit Points: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
      </div>
    </div>
  );
};

export default Card;
