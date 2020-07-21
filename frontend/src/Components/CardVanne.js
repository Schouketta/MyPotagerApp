import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody,
    CardText, CustomInput} from 'reactstrap';
import "./CardVanne.css";


class CardVanne extends Component {

    constructor(props) 
    {
        super(props);
    
        this.state = {
            activeTab : '1',
            tableauVannes : [
              {id:1, nomVanne:'Vanne Tomates',            adresseIP:'198.178.22', statut:'ON',   type:'fruits'},
              {id:2, nomVanne:'Vanne Framboises/Mures',   adresseIP:'198.178.21', statut:'OFF',  type:'légumes' },
              {id:3, nomVanne:'Vanne Herbes Aromatiques', adresseIP:'197.178.23', statut:'OFF',  type:'herbes aromatiques'},
              {id:4, nomVanne:'Vanne Radis',              adresseIP:'198.178.26', statut:'OFF',  type:'légumes'}
            ],
          };
    
    }

    render() {
        return (
              /* <Card> 
                    <CardHeader>{nomVanne}</CardHeader>
                    <CardBody>
                    <CardText>Statut : {statut}</CardText>
                    <CardText>IP : {adresseIP}</CardText>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on arrosage" />
                    <Button className="buttonCardVanne">Attribuer un programme</Button>
                    </CardBody>
                </Card>*/ 
                <div></div>
        );
    }
}

export default CardVanne;