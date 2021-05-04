import styled from 'styled-components/native'
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS == 'android' ? 150 : 40}px;
    width: 100%;
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

export const BorderlessButton = styled.TouchableOpacity`

`;

export const TextHeader = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

export const PhotoBox = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    border: 1px;
    border-color: #fff;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
`;

export const PhotoView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const PhotoText = styled.Text`
    color: #fff;
    margin-left: 10px;
    font-size: 16px;
`;

export const PickerView = styled.View`
    background: #f2f5f9;
    border-radius: 10px;
    width: 100%;
    height: 60px;
    margin-bottom: 8px;
`;

export const ViewRadioButton = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const RadioButtonText = styled.Text`
    flex-direction: row;
    color: #090f1b;
    flex: 2;
    font-size: 12px;
    font-family: 'RobotoSlab-Regular';
`;

export const RadioButtonTitle = styled.Text`
    color: #090f1b;
    font-size: 16px;
    margin-right: 60px;
    font-family: 'RobotoSlab-Regular';
`;

export const RadioButtonContainer = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #f2f5f9;
    border-radius: 10px;
    margin-bottom: 8px;

    flex-direction: row;
    align-items: center;
`;