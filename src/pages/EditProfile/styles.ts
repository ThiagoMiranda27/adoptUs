import styled from 'styled-components/native'
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS == 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #f4ede8;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: 10px;
    background: #235cba;
    padding: 16px 0 ${16 + getBottomSpace()}px;

    align-items: center;
    flex-direction: row;
`;

export const BackButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 140px;
`;

export const HeaderContainer = styled.View`
    padding: 20px;
    background-color: #235cba;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BorderlessButton = styled.TouchableOpacity``;

export const ButtonDatePicker = styled.TouchableOpacity`
    height: 60px;
    background: #6f93c9;
    border-radius: 10px;
    margin-top: 8px;

    justify-content: center;
    align-items: center;
`;

export const TextHeader = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

