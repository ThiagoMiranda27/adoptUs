import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #f2f5f9;
    border-radius: 10px;
    margin-bottom: 8px;

    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    margin-left: -10px;
    color: #090f1b;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;