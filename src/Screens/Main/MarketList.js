import React from 'react';
import styled from 'styled-components';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Text } from 'react-native';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const Container = styled.View`
    flex:1;
    align-items:center;
`;
const BannerContainer = styled.View`
    flex:1;
    width:100%;
`;

const BannerCard = styled.View`
    width:100%;
`;

const ProductContainer = styled.View`
    flex:4;
    background-color : ${({theme}) => theme.background};
`;

const Banner = () => (
    <BannerCard>
        <Text>test</Text>
    </BannerCard>
)

const MarketList = () => {
    return (
        <Container>
            <BannerContainer>
                <Banner />
                <Banner />
                <Banner />
            </BannerContainer>
        </Container>
    );
};

export default MarketList;