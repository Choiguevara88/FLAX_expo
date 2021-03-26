import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:${({theme})=>theme.background};
`;

const StyledText = styled.Text`
    font-size:13px;
`;

const NoticeService = () => {
    return (
       <Container>
           <StyledText>이용약관 내용</StyledText>
       </Container>
    );
};

export default NoticeService;