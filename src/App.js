import { useEffect, useState } from "react";
import "./App.css";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import playersData from "./components/Data/Data.json";
import PlayersCard from "./components/PlayersCard/PlayersCard";
import { Row, Container } from "react-bootstrap";

function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
  }, [players]);

  //for handler
  const handleAddPlayer = (playersData) => {
    const newAddPlayer = [...addPlayer, playersData];
    setAddPlayers(newAddPlayer);
  };
  return (
    <Container className='App'>
      <h1>Players Loaded: {playersData.length}</h1>
      {/* <h3>Player Added: {addPlayer.length}</h3> */}
      <AddPlayer addPlayer={addPlayer}></AddPlayer>
      <Row>
        {players.map((player) => (
          <PlayersCard player={player} key={player.id} handleAddPlayer={handleAddPlayer}></PlayersCard>
        ))}
      </Row>
    </Container>
  );
}

export default App;
