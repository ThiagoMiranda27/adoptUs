import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
    padding: 20px;
    background-color: #b07b61;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BorderlessButton = styled.TouchableOpacity`
    text-align: right;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextHeader = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;