import React, { Component } from 'react';
import WidgetChiffre from '../Widgets/WidgetChiffre';
import { Container, Row, Col } from 'reactstrap';
import "./MainContent.css";


class SensorsContainer extends Component {
    render() {
        return (
            <div className="sensorsContainer">
            <Row>
                <Col>
                    <WidgetChiffre nombre='27' couleur='#8282FF' intitule="Temperature"></WidgetChiffre>
                    <WidgetChiffre nombre='3' couleur='#FF9C9C' intitule="Force Vent"></WidgetChiffre>
                    
                </Col>
                <Col>
                    <WidgetChiffre nombre='5' couleur='#FFC969' intitule="Ensoleillement"></WidgetChiffre>
                    <WidgetChiffre nombre='33' couleur='#30D6D6' intitule="Pluviométrie"></WidgetChiffre>
                </Col>
                
            </Row>
        </div>
        );
    }
}

export default SensorsContainer;