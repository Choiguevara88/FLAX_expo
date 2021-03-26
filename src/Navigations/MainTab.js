import React, { useContext, useEffect }         from 'react';
import { createBottomTabNavigator }             from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons }from '@expo/vector-icons';
import { ThemeContext }                         from 'styled-components/native';
import { getFocusedRouteNameFromRoute }         from '@react-navigation/native';
import { MarketList, FlexList, OhyeahList, ChatList, Myinfo } from '../Screens';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({focused, name}) => {
    const theme = useContext(ThemeContext);
    return (
        <MaterialCommunityIcons name={ name } size={ 26 } color={ focused ? theme.tabActiveColor : theme.tabInactiveColor} />
    )
}

const MainTab = ({ navigation, route }) => {
    const theme = useContext(ThemeContext);

    useEffect(()=> {
        navigation.setOptions({ 
            headerTitle: "FLAX",
            headerRight: ()=> (  
            <MaterialCommunityIcons
                name    = "magnify"
                size    ={ 26 }
                style   ={ { margin:10 } }
                onPress ={ ()=>navigation.navigate("Search") }
            />
            )
        });
    }, [ route ]);

    return (
        <Tab.Navigator
            tabBarOoptions={{
                activeTintColor:    theme.tabActiveColor,
                inactiveTintColor:  theme.tabInactiveColor,
            }}
        >
            <Tab.Screen 
                name        = "MarketList" 
                component   = { MarketList }
                options     = {{
                    title       : "마켓",
                    tabBarIcon  : ( {focused} ) => TabBarIcon({ focused, name : focused ? 'cart' : 'cart-outline' })
                }}
            />
            <Tab.Screen 
                name        = "FlexList" 
                component   = { FlexList }
                options     = {{
                    title       : "플렉스",
                    tabBarIcon  : ( {focused} ) => TabBarIcon({ focused, name : focused ? 'crown' : 'crown-outline' })
                }}
            />
            <Tab.Screen 
                name        = "OhyeahList" 
                component   = { OhyeahList }
                options     = {{
                    title       : "오예",
                    tabBarIcon  : ( {focused} ) => TabBarIcon({ focused, name : focused ? 'palette' : 'palette-outline' })
                }}
            />
            <Tab.Screen 
                name        = "ChatList" 
                component   = { ChatList }
                options     = {{
                    title       : "채팅",
                    tabBarIcon  : ( {focused} ) => TabBarIcon({ focused, name : focused ? 'message-text' : 'message-text-outline' })
                }}
            />
            <Tab.Screen 
                name        = "Myinfo" 
                component   = { Myinfo }
                options     = {{
                    title       : "내정보",
                    tabBarIcon  : ( {focused} ) => TabBarIcon({ focused, name : focused ? 'account' : 'account-outline' })
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;