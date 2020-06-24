import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    ResponsiveContainer
  } from 'recharts';
import "./MainContent.css";



class LivestreamContainer extends Component {

    render() {
        return (
            <div className="livestreamContainer" >
            <h6>Livestream</h6>
            <ResponsiveContainer>
                <iframe className="livestream" src="https://www.youtube.com/embed/erLiHQ8BSNM" style={{ width: '90%', height: 305 }}></iframe>
            </ResponsiveContainer>
            </div>
        );
    }
}

export default LivestreamContainer;



