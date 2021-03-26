import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from '../../Components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validatePhone, removeWhitespace, phoneFormat } from '../../Utils';

const Container = styled.View`
    align-items:        center;
    background-color:   ${ ({theme}) => theme.background };
    padding:            20px;
    padding-top:        ${({ insets: {top} }) => top > 25 ? top : 25}px;
    padding-bottom:     ${({ insets: {bottom} }) => bottom > 100 ? bottom : 100}px;
`;

const InquiryGreed1  = styled.View`
    width:100%;
    flex:1;
    padding:10px 0px;
`;

const InquiryGreed3 = styled.View`
    width:100%;
    flex:3;
    padding:10px 0px;
`;

const InquiryTitle  = styled.Text`
    width:100%;
    align-items:flex-start;
    color:${({theme}) => theme.inquiryTitle };
    font-size:18px;
    font-weight:bold;
`;

const PhoneChange = ({ navigation }) => {
    const insets= useSafeAreaInsets();
    const [oldPhone, setOldPhone] =useState('');
    const [newPhone, setNewPhone]=useState('');
    const [nick, setNick]=useState('');

    const nickRef = useRef();
    const newPhoneRef = useRef();

    const _handleOldPhoneChange = text => {
        setOldPhone(phoneFormat(text));
    }

    const _handleNickChange = text => {
        setNick(removeWhitespace(text));
    }

    const _handleNewPhoneChange = text => {
        setNewPhone(phoneFormat(text));
    }

    const _handleSubmitButtonPress = () => {
        navigation.replace('PhoneChangeOk');
    }
    
    let nl = "\n";
    
    
    return (
        <KeyboardAwareScrollView viewIsInsideTabBar={true} extraHeight={20} style={{height:"100%"}}>
            <Container insets={insets}>
                <InquiryGreed1>
                    <InquiryTitle>아래 내용을 입력하셔서 {nl}제출해주시면 {nl}확인 후 휴대폰 번호 변경을 {nl}도와드리겠습니다.</InquiryTitle>
                </InquiryGreed1>
                <InquiryGreed3>
                <Input
                        label="기존 계정의 휴대폰 번호"
                        value={oldPhone}
                        onChangeText={ _handleOldPhoneChange }
                        onSubmitEditing={ ()=>{ nickRef.current.focus() } }
                        placeholder="휴대폰 번호를 입력해주세요."
                        returnKeyType="next"
                        keyboardType="phone-pad"
                        maxLength={ 13 }
                    />
                <Input
                    ref={nickRef}
                        label="기존 계정의 닉네임"
                        value={nick}
                        onChangeText={ _handleNickChange }
                        onSubmitEditing={ ()=>{ newPhoneRef.current.focus() } }
                        placeholder="기존 계정의 닉네임을 입력해주세요."
                        returnKeyType="next"
                    />
                <Input
                    ref={newPhoneRef}
                        label="변경 후 휴대폰 번호"
                        value={newPhone}
                        onChangeText={ _handleNewPhoneChange }
                        onSubmitEditing={ ()=>{} }
                        placeholder="변경할 휴대폰 번호를 입력해주세요."
                        returnKeyType="done"
                        keyboardType="phone-pad"
                        maxLength={ 13 }
                    />
                </InquiryGreed3>
                <InquiryGreed1>
                    <Button 
                    title="제출하기" 
                    onPress={ _handleSubmitButtonPress } 
                    disabled={!(
                        validatePhone(oldPhone) && validatePhone(newPhone) && nick != ""
                    )} />
                </InquiryGreed1>
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default PhoneChange;