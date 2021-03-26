import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.View`
    width:100%;
    padding:0px;
`;
const StyledTouchArea = styled.TouchableOpacity`
    height:30px;
    width:100%;
    flex-direction:row;
    align-items:center;
`;
const StyledContainer = styled.View`
    width:20px;
    height:20px;
`;

const StyledImage = styled.Image`
  border-radius:0;
  resize-mode:contain;
  width:100%;
  height:100%;
`;

const StyledLabel = styled.Text`
    font-size:13px;
    font-weight:bold;
    margin-left:4px;
    color : ${({theme, checked}) => checked ? theme.checkedLabel : theme.uncheckedLabel };
    letter-spacing:-0.5px;
`;

const Checkbox = ({ containerStyle, onPress, label, checked, children }) => {
    return (
        <Container style={ containerStyle }>
          <StyledTouchArea onPress={onPress}>
            <StyledContainer>
              <StyledImage source={ checked ? require('../Asset/images/check_on.png') : require('../Asset/images/check_off.png') } />
            </StyledContainer>
            <StyledLabel checked={checked}>{ label ? label : null }{ children }</StyledLabel>
          </StyledTouchArea>
        </Container>
    );
};

Checkbox.defaultProps = {
  onPress : ()=>{},
  checked : false,
  label   : '',
}

Checkbox.propTypes = {
  containerStyle  : PropTypes.object,
  onPress         : PropTypes.func,
  label           : PropTypes.string,
  checked         : PropTypes.bool,
};

export default Checkbox;

/*
 <CusCheckbox check={autoLogin} name={'자동로그인'} onPress={()=> setAutoLogin(!autoLogin)} cusStyle={{alignItems: 'flex-end', marginTop: 12}} />

export const CusCheckbox = ({{containerStyle, onPress, checkboxStyle, }}) => {
    return (
      <View style={[{width: '100%'}, props.cusStyle]}>
        <TouchableOpacity onPress={() => props.onPress()} style={[styles.rowVerticalCenter, {paddingLeft: 4, height: 46}, props.cusStyle2]}>
          <View style={{width: 20, height: 20, marginHorizontal: 4}}>
              <Image source={ props.check?require('./../images/check_on.png'):require('./../images/check_off.png')} style={styles.imgContain} />
            </View>
          {
            props.name ? 
            <Text style={[{fontSize: 13, fontWeight: 'bold', marginLeft: 8, color:(props.check?'#555':'#999'), letterSpacing: -0.5 }, props.cusStyle3]}>{props.name}</Text> : null
          }
          { props.nameComponent }
        </TouchableOpacity>
      </View>
    );
  }
*/