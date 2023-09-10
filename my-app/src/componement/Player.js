import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css'; 
import CardGroup from 'react-bootstrap/CardGroup';

function Player({ player }) {
 
  
  return (
    <div style={{marginBottom:'2%'}}>
      <CardGroup>
    <Card>
      <Card.Img variant="top" src={player.ImageURL} style={{ width: '885px', height: '300px'}} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Nationality:{player.nationality}</ListGroup.Item>
        <ListGroup.Item>Age: {player.age} </ListGroup.Item>
        <ListGroup.Item>Team: {player.team}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Jersey Number: {player.jerseyNumber}</small>
      </Card.Footer>
    </Card>
     
    </CardGroup>
    </div>
  );
}

export default Player;
