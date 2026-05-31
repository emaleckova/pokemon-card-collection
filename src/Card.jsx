const Card = ({ borderColor }) => {
  return (
    <div className="card" border-color={borderColor}>
      <h5>Charmander</h5>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
    </div>
  );
};

export default Card;
