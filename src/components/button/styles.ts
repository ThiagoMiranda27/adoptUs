import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

// cor: amarelo
export const Container = styled(RectButton)`
    /* width: 100%; */
    height: 60px;
    background: #fed26f;
    border-radius: 10px;
    margin-top: 8px;

    justify-content: center;
    align-items: center;
`;

// cor: cinza
export const ButtonText = styled.Text`
    font-family: 'RobotoSlab-Medium';
    color: #594d46; 
    font-size: 18px;
`;