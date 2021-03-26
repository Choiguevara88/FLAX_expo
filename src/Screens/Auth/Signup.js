import React, { useRef, useState, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';
import { Input, Button, Image } from '../../Components';
import { ProgressContext } from '../../Contexts';
import { removeWhitespace, nickFormat } from '../../Utils';

const Container = styled.View`
    flex:               1;
    justify-content:    center;
    align-items:        center;
    background-color:   ${({theme})=>theme.background};
    padding:            20px;
    padding-top:        ${({ insets: {top} }) => (top > 35 ? top : 35)}px;
    padding-bottom:     ${({ insets: {bottom} }) => (bottom > 50 ? bottom : 50)}px;
`;

const Signup = ({ navigation, route: {params} }) => {
    const insets    = useSafeAreaInsets();
    const [nick, setNick]           = useState('');
    const [intro, setIntro]         = useState('');
    const introRef                  = useRef();
    const {spinner}                 = useContext(ProgressContext);
    const [photoUrl, setPhotoUrl]   = useState('http://cnj05.cafe24.com/noProfile.jpg');
    const [phone, setPhone]         = useState(params.phone);

    const _handleNickChange = text => {
        setNick(nickFormat(removeWhitespace(text)));
    }

    const _handleIntroChange = text => {
        setIntro(text);
    }

    const _handleSubmitButtonPress = () => {
    }

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={20}
        >        
        <Container insets={insets}>
            <Image label="프로필 사진" rounded url={photoUrl} showButton onChangeImage={url=> setPhotoUrl(url)}/>
            <Input
                label="닉네임"
                value={nick}
                onChangeText={ _handleNickChange }
                onSubmitEditing={ ()=>{introRef.current.focus()} }
                placeholder="닉네임을 입력해주세요. (공백, 특수문자 불가)"
                returnKeyType="next"
            />
            <Input
                ref={introRef}
                label="자기소개"
                value={intro}
                onChangeText={ _handleIntroChange }
                onSubmitEditing={ ()=>{} }
                placeholder="자신을 소개해 보세요. Ex) 컬렉팅 시작년도, 컬렉팅 취향, SNS"
                returnKeyType="done"
                multiline={true}
                numberOfLines={5}
            />
            <Button title="완료" onPress={ _handleSubmitButtonPress } containerStyle={{marginTop:40}} disabled={ !(nick.length >= 3 && intro.length >= 3) }/>
        </Container>
        </KeyboardAwareScrollView>
    );
};

export default Signup;