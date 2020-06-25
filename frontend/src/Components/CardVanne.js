import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardText } from 'reactstrap';

class CardVanne extends Component {
    render() {
        return (
                <Card>
                    <CardHeader>NomVanne</CardHeader>
                    <CardBody>
                    <CardText>Statut : </CardText>
                    <CardText>IP : </CardText>
                    <Button>Ajouter un programme</Button>
                    </CardBody>
                </Card>
        );
    }
}

export default CardVanne;