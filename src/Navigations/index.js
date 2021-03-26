import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Auth';
import MainStack from './Main';
import { Spinner } from '../Components';
import { ProgressContext, UserContext } from '../Contexts';

const Navigation = () => {
    const {inProgress}  = useContext(ProgressContext);
    const {user}        = useContext(UserContext);    
    
/*    return (
        <NavigationContainer>
            { user?.phone && user?.token ? <MainStack /> : <AuthStack /> }
            { inProgress && <Spinner /> }
        </NavigationContainer>
    );*/
    return (
        <NavigationContainer>
            <MainStack />
            { inProgress && <Spinner /> }
        </NavigationContainer>
    );    
};

export default Navigation;