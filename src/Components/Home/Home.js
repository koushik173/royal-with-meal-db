import React from 'react';
import { Button, Row, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='welcome'>
                <h1>WELCOME To <span className='roy'>Roy Restro</span></h1>
                <h4>Delivering great food for more than 18 years!</h4><br />
                <Link className='menU' to="/menu"> Menu</Link>
                <Link className='menU'> Book A Table</Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;