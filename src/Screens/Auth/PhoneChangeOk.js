import React from 'react';
import styled from 'styled-components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../../Components';

const Container = styled.View`
    flex :              1;
    align-items:        center;
    background-color:   ${ ({theme}) => theme.background };
    padding:            20px;
    padding-top:        ${({ insets: {top} }) => top > 35 ? top : 35}px;
    padding-bottom:     ${({ insets: {bottom} }) => bottom > 100 ? bottom : 100}px;
`;

const InquiryTitle  = styled.Text`
    width:100%;
    align-items:flex-start;
    color:${({theme}) => theme.inquiryTitle };
    font-size:18px;
    font-weight:bold;
    margin-bottom:10px;
`;

const InquiryGreed4 = styled.View`
    width:100%;
    flex:4;
`;

const InquiryGreed1 = styled.View`
    width:100%;
    flex:1;
`;


const PhoneChangeOk = () => {
    const insets = useSafeAreaInsets();
    let nl = "\n";
    return (
        <Container insets={insets}>
            <InquiryGreed4>
            <InquiryTitle>문의가 접수되었습니다. {nl}최대한 빠르게 조치를 취해드리도록 {nl}노력하겠습니다.</InquiryTitle>
            </InquiryGreed4>
            <InquiryGreed1>
            <Button title="앱 종료" onPress={ ()=>{} } containerStyle={{marginTop:30}}/>
            </InquiryGreed1>
        </Container>
    );
};
export default PhoneChangeOk;