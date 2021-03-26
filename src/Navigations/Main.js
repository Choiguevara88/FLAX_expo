import React, { useContext }        from 'react';
import { ThemeContext }             from 'styled-components/native';
import { createStackNavigator }     from '@react-navigation/stack';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const Main = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTitleAlign        :"center",
                headerTintColor         : theme.headerTintColor,
                cardStyle               : {backgroundColor:theme.backgroundColor},
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Main" component={ MainTab } />
        </Stack.Navigator>
    );
};

export default Main;