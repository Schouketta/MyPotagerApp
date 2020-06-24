import React, { Component } from 'react';
import WidgetChiffre from '../Widgets/WidgetChiffre';
import { Container, Row, Col } from 'reactstrap';
import "./MainContent.css";


class SensorsContainer extends Component {
    render() {
        return (
            <div className="sensorsContainer">
            <h6>Données capteurs</h6>

            <Row>
                <Col>
                    <WidgetChiffre nombre='27 °C' couleur='#8282FF' intitule="Temperature"></WidgetChiffre>
                    <WidgetChiffre nombre='3 km/h' couleur='#fd9644' intitule="Force Vent"></WidgetChiffre>
                    
                </Col>
                <Col>
                    <WidgetChiffre nombre='5' couleur='#FFC969' intitule="Indice UV"></WidgetChiffre>
                    <WidgetChiffre nombre='33 mm' couleur='#30D6D6' intitule="Pluviométrie"></WidgetChiffre>
                </Col>
                
            </Row>
        </div>
        );
    }
}

export default SensorsContainer;