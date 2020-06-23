import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    ResponsiveContainer
  } from 'recharts';
import "./MainContent.css";



class LivestreamContainer extends Component {

    render() {
        return (
            <div className="livestreamContainer" style={{ width: '100%', height: 325 }}>
            <ResponsiveContainer>
                <iframe src="https://www.youtube.com/embed/ipOBNHmZjkI"></iframe>
            </ResponsiveContainer>
            </div>
        );
    }
}

export default LivestreamContainer;



