import React, { useState } from 'react';
import styled from 'styled-components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Button, CheckboxMin, ButtonText } from '../../Components';
import { validatePhone, removeWhitespace, phoneFormat, randomNum } from '../../Utils';
import { Alert, Text, View } from 'react-native';

const Container = styled.View`
    flex:1;
    justify-content:    center;
    align-items:        center;
    background-color:   ${ ({theme}) => theme.background };
    padding:            20px;
    padding-top:        ${({ insets: {top} }) => (top > 25 ? top : 25)}px;
    padding-bottom:     ${({ insets: {bottom} }) => (bottom > 50 ? bottom : 50)}px;
`;
const AuthGreed1 = styled.View`
    width:100%;
    flex:1;
    padding:10px 0px;
`;
const AuthGreed2    = styled.View`
    width:100%;
    flex:2;
    padding:10px 0px;
`;

const AuthTitle = styled.Text`
    width:100%;
    color:${({theme}) => theme.authTitle };
    font-size:18px;
    font-weight:bold;
`;

const AuthSubTitle = styled.Text`
    width: 100%;
    align-items:flex-start;
    padding:30px 0px;
    font-size:14px;
    font-weight:500;
    color:${ ({theme}) => theme.authSubTitle };
`;

const AuthInqire = styled.Text`
    width: 100%;
    justify-content:flex-end;
    text-align:right;
    padding: 30px 0px 0px 0px;
    font-size:14px;
    font-weight:500;
    color:${ ({theme}) => theme.authSubTitle };
`;

const AgreeSection  = styled.View`
    width:100%;
    padding:10px 0px 20px 0px;
`;

const Login = ({ navigation }) => {
    
    const insets                            = useSafeAreaInsets();
    
    const [phone, setPhone]                 = useState('');
    const [disable, setDisable]             = useState(true);
    const [authSend, setAuthSend]           = useState(false);
    const [authTitle, setAuthTitle]         = useState('인증문자 받기');
    const [authNum, setAuthNum]             = useState('');
    const [authConfirm, setAuthConfirm]     = useState(false);
    const [isChecked, setIsChecked]         = useState(false);

    const _handlePhoneChange = phone => {
        let changedPhone = phoneFormat(phone);
        setPhone(changedPhone);
        
        if(changedPhone.length > 12)    setDisable(!validatePhone(changedPhone));
        else                            setDisable(true);
    }

    const _handleAuthButtonPress = () => {
        
        if(!validatePhone(phone)) {
            Alert.alert("휴대폰번호 오류","정확한 휴대폰번호를 입력해주세요.",[{ text: "확인", onPress:()=>{}, style:"cancel" }]);
            return false;
        }
        setAuthTitle("인증문자 재발송");
        setAuthSend(true);

        setAuthConfirm(randomNum(6));
    }
    
    const _handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    }

    const _handleAuthNumChange = text => {
        let changeAuthNum = removeWhitespace(text);
        setAuthNum(changeAuthNum);
    }
    
    const _handleSubmitButtonPress = () => {

        if(authConfirm != authNum)  { Alert.alert("휴대폰 인증을 완료하셔야 합니다."); return false; } 
        if(!isChecked)              { Alert.alert("이용약관 및 개인정보 처리방침에 동의하셔야 합니다."); return false; }
        
        navigation.replace('Signup', {phone});
    }

    const AgreeNotice = () => {
        return (
            <>
                <ButtonText onPress={()=>{navigation.navigate("NoticeService")}} title="이용약관" color="red"/>
                <Text>과 </Text>
                <ButtonText onPress={()=>{navigation.navigate("NoticePersonal")}} title="개인정보 처리방침" color="red" />
                <Text>에 동의합니다.</Text>
            </>
        )
    }

    return (
        <KeyboardAwareScrollView>
            <Container insets={insets}>
                <AuthGreed1>
                    <AuthTitle>회원 정보를 찾을 수 없습니다.{ "\n" }회원가입 후 서비스 이용이 가능합니다.</AuthTitle>
                    <AuthSubTitle>FLAX는 휴대폰번호로 가입해요.{ "\n" }번호는 어디에도 공개하지 않아요.</AuthSubTitle>
                </AuthGreed1>
                <AuthGreed1>
                <Input
                    label="휴대폰 번호"
                    value={phone}
                    onChangeText={ _handlePhoneChange }
                    onSubmitEditing={ ()=>{} }
                    placeholder="010-1234-5678"
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    maxLength={ 13 }
                    disabled={ authSend }
                />
                <Button title={ authTitle } onPress={ _handleAuthButtonPress } disabled={ disable } containerStyle={{ width:"40%", alignSelf:"flex-end" }} />
                </AuthGreed1>
                <AuthGreed2>
                { authSend && (
                <>
                <Input
                    label="인증번호"
                    value={ authNum }
                    onChangeText={ _handleAuthNumChange }
                    onSubmitEditing={ ()=>{} }
                    placeholder="인증번호를 입력해주세요."
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    maxLength={ 6 }
                />
                <AgreeSection>
                    <CheckboxMin checked={isChecked} onPress={ _handleCheckboxPress } children={ <AgreeNotice/> } />
                </AgreeSection>
                <Button title="시작하기" onPress={ _handleSubmitButtonPress } disabled={ !( authNum == authConfirm && isChecked) } />
                <Text>{ authConfirm }</Text>
                </>                    
                ) }
                <AuthInqire>전화번호가{"\n"}변경되었나요?</AuthInqire>
                <ButtonText title="문의하기" onPress={ ()=>{ navigation.navigate("PhoneChange")} } containerStyle={{alignSelf:'flex-end', paddingTop:5}} titleStyle={{fontSize:14}} />
                </AuthGreed2>
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default Login;