import React from 'react';
import "./MainContent.css";
import SensorsContainer from './SensorsContainer'
import LivestreamContainer from './LivestreamContainer';
import { Container, Row, Col } from 'reactstrap';
import CardVanne from './CardVanne';
import CardSlider from './CardSlider';
import TabsVannes from './TabsVannes';



class MyMainContent extends React.Component {
    render() {
      return (
        <div>
          <div className="mainContent">
              <Row >
                  <Col md="6" xs="12"><SensorsContainer></SensorsContainer></Col>
                  <Col md="6 " xs="12"><LivestreamContainer></LivestreamContainer></Col>
              </Row>
          </div>
          <div className="cardContainer">
              <Row >
                  <Col>
                  <CardSlider></CardSlider>
                  </Col>
              </Row>
          </div>        
         
      </div>
      )
    }
  }
  export default MyMainContent;
