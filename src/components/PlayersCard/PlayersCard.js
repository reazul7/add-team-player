import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayersCard.css';
import { Button, Card, Col } from 'react-bootstrap';


const PlayersCard = (props) => {
    // console.log(props.handleAddPlayer)
    const { name, club, salary, image } = props.player;
    // console.log(props);
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <Col sm={4}>
            <Card>
                <Card.Img variant="top" className="img-fluid" height='500px' src={image}  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><b>Club: {club}</b></Card.Text>
                    <Card.Text>Salary: ${salary}</Card.Text>
                    <Button onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus}/> Add Player</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PlayersCard;