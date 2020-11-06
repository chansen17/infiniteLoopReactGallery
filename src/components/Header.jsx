import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
    max-width: 70rem;
    height: 30vh;
    margin: 2rem auto;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1604657043102-ba8a802f37a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
`;

const H1 = styled.h1`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 1rem;
`;

const Para = styled.p`
    color: #eee;
`;

const Header = () => {
    return (
        <Heading>
            <H1>Reactfinite</H1>
            <Para>The internet’s source of freely-usable images.</Para>
            <Para>Powered by Chris Hansen.</Para>
            <Para>Courtesty of Unsplashed API</Para>
        </Heading>
    );
}

export default Header;
