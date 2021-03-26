import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

const StyledContainer = styled.View`
    width:100%;
    flex-direction:row;
    align-items:center;
`;

const StyledTouchArea = styled.TouchableOpacity`
    height:20px;
    width:20px;
    margin-right:8px;
`;
const StyledImage = styled.Image`
  border-radius:0;
  resize-mode:contain;
  width:100%;
  height:100%;
`;

const Checkbox = ({ onPress, checked, children }) => {

    return (
        <StyledContainer>
          <StyledTouchArea onPress={ onPress }>
              <StyledImage source={ checked ? require('../Asset/images/check_on.png') : require('../Asset/images/check_off.png') } />
          </StyledTouchArea>
          { children }
        </StyledContainer>
    );
};

Checkbox.defaultProps = {
  onPress : ()=>{},
  checked : false,
}

Checkbox.propTypes = {
  onPress         : PropTypes.func,
  checked         : PropTypes.bool,
};

export default Checkbox;