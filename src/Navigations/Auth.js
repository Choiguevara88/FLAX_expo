import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, PhoneChange, PhoneChangeOk, NoticeService, NoticePersonal } from '../Screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions = {{
                headerTitleAlign    : "center",
                cardStyle           : { backgroundColor: theme.backgroundColor },
                headerTintColor     : theme.headerTintColor,
            }}
        >
            <Stack.Screen name="Login" component={Login} options={{ title:"회원가입", headerShown:true }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title:"프로필 설정", headerBackTitleVisible:false }} />
            <Stack.Screen name="PhoneChange" component={PhoneChange} options={{ title:"문의하기(휴대폰 번호 변경)", headerBackTitleVisible:false }} />
            <Stack.Screen name="PhoneChangeOk" component={PhoneChangeOk} options={{ title:"문의하기(휴대폰 번호 변경)", headerBackTitleVisible:false }} />
            <Stack.Screen name="NoticeService" component={NoticeService} options={{title:"이용약관", headerBackTitleVisible:false}} />
            <Stack.Screen name="NoticePersonal" component={NoticePersonal} options={{title:"개인정보 처리방침", headerBackTitleVisible:false}} />
        </Stack.Navigator>
    );
};

export default AuthStack;