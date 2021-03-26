import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { ThemeContext } from 'styled-components';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';

const Container = styled.View`
    flex:1;
    background-color : ${({theme})=>theme.background};
`;

const ItemContainer = styled.TouchableOpacity`
    flex-direction : row;
    align-items:center;
    border-bottom-width:1px;
    border-color: ${({theme}) => theme.listBorder};
    padding:15px 20px;
`;
const ItemTextContainer = styled.View`
    flex : 1;
    flex-direction: column;
`;
const ItemTitle = styled.Text`
    font-size:20px;
    font-weight:600;
`;
const ItemDescription = styled.Text`
    font-size:16px;
    margin-top:5px;
    color:${({theme}) => theme.listTime};
`;

const ItemTime = styled.Text`
    font-size:12px;
    color:${({theme})=>theme.listTime};
`;

const channels = [];

for (let idx =0; idx < 1000; idx++) {
    channels.push({
        id          : idx,
        title       : `title ${idx}`,
        description : `description ${idx}`,
        createAt    : idx
    })
}

const getDateOrTime = ts => {
    const now       = moment().startOf('day');
    const target    = moment(ts).startOf('day');
    
    return moment(ts).format(now.diff(target, 'days') > 0 ? 'MM/DD' : 'HH:mm');
}

const Item = React.memo(({ item: {id, title, description, createdAt}, onPress}) => {
    const theme = useContext(ThemeContext);

    return(
        <ItemContainer onPress={()=>onPress({id, title})}>
            <ItemTextContainer>
                <ItemTitle>{ title }</ItemTitle>
                <ItemDescription>{ description }</ItemDescription>
            </ItemTextContainer>
            <ItemTime>{ getDateOrTime(createdAt) }</ItemTime>
        </ItemContainer>
    )
}
)

const ChatList = ({ navigation }) => {
    const _handleItemPress = params => {
        navigation.navigate('', params);
    }
    return (
        <Container>
            <FlatList
                KeyExtractor    = {item => item['id']}
                data            = { channels }
                renderItem      = {({ item })=>(<Item item={ item } onPress={ _handleItemPress } />)}
                windowSize      = {3}
            />
        </Container>
    );
};

export default ChatList;