import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: 100%;
    objectFit: cover;
`;

const UnsplashedImage = ({ imageUrl, key}) => {
    return (
        <Img src={imageUrl} key={key} alt="" />
    );
}

export default UnsplashedImage;
