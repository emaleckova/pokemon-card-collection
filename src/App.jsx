// npm packages
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

// custom components
import logo from "../public/pokemon-logo-png-1421.png";
import Card from "./Card";
import { getContrastColor } from "./textColor";
import Footer from "./Footer";
// visuals
import "./App.css";

/* Pokemon data */
const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

const typeColors = {
  Grass: "#007E2FFF",
  Fire: "#A40000FF",
  Water: "#16317DFF",
  Electric: "#A300FFFF",
  Psychic: "#B86092FF",
  Normal: "#FFCD12FF",
  Ghost: "#00B7A7FF",
  Fighting: "#721B3EFF",
  Dragon: "#2E6F40FF",
  Rock: "#7F7F7FFF",
};

function App() {
  // Sprite image URL pattern:
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  console.log(pokemons);
  console.log(typeColors);

  const types = ["All", ...new Set(pokemons.map((p) => p.type))].sort();

  console.log(types);

  /* For filtering with type buttons & searcg field */
  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");

  /* For ranges of HP and attack values */
  const [hpRange, setHpRange] = useState([0, 200]);
  const [attackRange, setAttackRange] = useState([0, 200]);

  const filteredPokemons = pokemons.filter((p) => {
    const matchesType = activeType === "All" || p.type === activeType;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesHp = p.hp >= hpRange[0] && p.hp <= hpRange[1];
    const matchesAttack =
      p.attack >= attackRange[0] && p.attack <= attackRange[1];
    return matchesType && matchesSearch && matchesHp && matchesAttack;
  });

  return (
    <div>
      <header className="header">
        <div className="title-container">
          <img src={logo} alt="Pokemon Logo" />
          <h1>Card Collection</h1>
        </div>
      </header>

      {/* Type filter buttons */}
      <div className="filters-container">
        <ButtonGroup className="type-button-group">
          {types.map((type) => (
            <Button
              className={`type-button ${
                activeType === type ? "type-button-active" : ""
              }`}
              key={type}
              onClick={() => setActiveType(type)}
              style={{
                borderColor: typeColors[type],
                backgroundColor: typeColors[type],
                color: getContrastColor(typeColors[type]),
              }}
            >
              {type}
            </Button>
          ))}

          {/* Search field */}
          <input
            className="search-box"
            type="text"
            placeholder="Search by name..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </ButtonGroup>
      </div>

      <div className="stats-sliders">
        {/* HP SLIDER */}
        <div className="slider-section">
          <h4>
            HP: {hpRange[0]} - {hpRange[1]}
          </h4>

          <input
            type="range"
            label="hp_min"
            min="0"
            max="200"
            value={hpRange[0]}
            onChange={(e) => setHpRange([Number(e.target.value), hpRange[1]])}
          />

          <input
            type="range"
            label="hp_max"
            min="0"
            max="200"
            value={hpRange[1]}
            onChange={(e) => setHpRange([hpRange[0], Number(e.target.value)])}
          />
        </div>

        {/* ATTACK SLIDER */}
        <div className="slider-section">
          <h4>
            Attack: {attackRange[0]} - {attackRange[1]}
          </h4>

          <input
            type="range"
            label="attack_min"
            min="0"
            max="200"
            value={attackRange[0]}
            onChange={(e) =>
              setAttackRange([Number(e.target.value), attackRange[1]])
            }
          />

          <input
            type="range"
            label="attack_max"
            min="0"
            max="200"
            value={attackRange[1]}
            onChange={(e) =>
              setAttackRange([attackRange[0], Number(e.target.value)])
            }
          />
        </div>
      </div>

      <div className="card-container">
        {filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            color={typeColors[pokemon.type]}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
