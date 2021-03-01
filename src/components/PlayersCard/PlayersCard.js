import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayersCard.css';
import { Button, Card, Col } from 'react-bootstrap';


const PlayersCard = (props) => {
    const { name, club, salary, image } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <Col sm={4}>
            <Card  style={{border: '1px solid lightgrey', padding: '20px', backgroundColor: 'gray'}} className="my-3">
                <Card.Img variant="top" className="img-fluid" style={{height:'400px'}} src={image}  />
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