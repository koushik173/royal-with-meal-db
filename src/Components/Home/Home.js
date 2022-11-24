import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Container>
            <Row>
                <Col className='welcome'>
                    <h1>WELCOME To Roy Restro</h1>
                    <h4>Delivering great food for more than 18 years!</h4>
                    <button> Our Menu</button>
                </Col>
                <Col>2 of 3</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;