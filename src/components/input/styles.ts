import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #efeeee;
    border-radius: 10px;
    margin-bottom: 8px;

    flex-direction: row;
    align-items: center;
`;

// cor: cinza
export const TextInput = styled.TextInput`
    flex: 1;
    color: #594d46;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;

// cor: cinza
export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
    color: #594d46;
`;