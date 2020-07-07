import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardText, CustomInput} from 'reactstrap';
import "./CardVanne.css";


class CardVanne extends Component {
    render() {
        return (
                <Card>
                    <CardHeader>NomVanne</CardHeader>
                    <CardBody>
                    <CardText>Statut : </CardText>
                    <CardText>IP : </CardText>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on arrosage" />
                    <Button className="buttonCardVanne">Attribuer un programme</Button>
                    </CardBody>
                </Card>
        );
    }
}

export default CardVanne;