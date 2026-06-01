const Card = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <h5>{`Pokemon ${pokemon.id}`}</h5>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={`Pokemon ${pokemon.id}`}
          />
        </div>
      ))}
    </>
  );
};

export default Card;
