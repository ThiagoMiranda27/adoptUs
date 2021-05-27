import styled from 'styled-components/native'
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import colors from '../../assets/allColors/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    padding: 0 30px ${Platform.OS == 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #fed26f;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #854695;
    border-top-width: 1px;
    border-top-color: #232129;
    padding: 16px 0 ${16 + getBottomSpace()}px;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
    color: #fed26f;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`;

export const Logo = styled.Image`
    height: 70px;
    width: 100%;
`