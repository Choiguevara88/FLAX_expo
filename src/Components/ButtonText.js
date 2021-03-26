import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
    
    border-bottom-width: ${({borderCheck}) => borderCheck ? 1 : 0}px;
    border-color: ${({theme})=>theme.buttonTextTitle};
    
    padding:0px 0px 1px 0px;
`;

const Title     = styled.Text`
    font-size:13px;
    color:${({theme}) => theme.buttonTextTitle};
    
`;

const PointText = ({ onPress, containerStyle, title, titleStyle, border}) => {
    return (
        <Container onPress={onPress} style={containerStyle} borderCheck={border}>
            <Title style={titleStyle}>{ title }</Title>
        </Container>
    );
};

PointText.defaultProps = {
    onPress : ()=> {},
    border  : true,
}

PointText.propTypes = {
    onPress         :PropTypes.func,
    containerStyle  :PropTypes.object,
    title           :PropTypes.string.isRequired,
    titleStyle      :PropTypes.object,
    border          :PropTypes.bool,
}

export default PointText;