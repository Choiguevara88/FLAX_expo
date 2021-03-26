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

const NoticePersonal = () => {
    return (
        <Container>
            <StyledText>개인정보 처리방침 내용</StyledText>
        </Container>
    );
};

export default NoticePersonal;