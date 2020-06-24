import React from 'react';
import {
    Card, CardBody,
} from 'reactstrap';


import './widget.css';

class MyWidgetChiffre extends React.Component {
    render() {
        return (
            <div>
                <Card className= "widgetChiffre border-0" style={{backgroundColor: this.props.couleur }}>
                    <CardBody >
                        <h3>{this.props.nombre}</h3>
                        <h6>{this.props.intitule}</h6>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MyWidgetChiffre;