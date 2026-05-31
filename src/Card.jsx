const Card = ({ borderColor, pokemonId }) => {
  return (
    <div className="card" border-color={borderColor}>
      <h5>{`Pokemon ${pokemonId}`}</h5>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt={`Pokemon ${pokemonId}`}
      />
    </div>
  );
};

export default Card;
