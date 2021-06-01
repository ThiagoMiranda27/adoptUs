import styled from 'styled-components/native'
import {Platform} from 'react-native';

export const HeaderContainer = styled.View`
    padding: 20px;
    background-color: #854695;
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
    padding: 0 30px ${Platform.OS == 'android' ? 150 : 40}px;
`;

export const TextHeader = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

