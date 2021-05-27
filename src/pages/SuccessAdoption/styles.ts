import styled from 'styled-components/native'
import {Platform} from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS == 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #FFF;
    font-family: 'RobotoSlab-Medium';
    margin: 34px 0 24px;
`;