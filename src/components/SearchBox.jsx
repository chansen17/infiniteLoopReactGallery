import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    max-width: 350px;
    width: 100%;
    margin: 1rem auto;
    border: 2px inset #ccc;
    outline: none;
    active: none;
    padding: .5rem;
    font-size: 1.25em;
    display: flex;
    justify-content: center;
`;

const SearchBox = ({ images }) => {
    return (
        <Input placeholder="Under Construction :(" />
    );
}

export default SearchBox;
