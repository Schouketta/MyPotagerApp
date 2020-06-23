import React from 'react';
import "./MainContent.css";
import SensorsContainer from './SensorsContainer'
import LivestreamContainer from './LivestreamContainer';
import { Container, Row, Col } from 'reactstrap';



class MyMainContent extends React.Component {
    render() {
      return (
        <div className="mainContent">
            <Row xs="1" md="2" lg="2">
                <Col><SensorsContainer></SensorsContainer></Col>
                <Col><LivestreamContainer></LivestreamContainer></Col>
            </Row>
      </div>
      )
    }
  }
  export default MyMainContent;
