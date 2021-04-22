import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 110px;
    background-color: #fff;
    border-width: 1px;
    border-color: #e6e6f0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`;

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 18px;
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 32px;
    background-color: #eee;    
`;

export const ProfileInfo = styled.View`
    margin-left: 16px;
`;

export const Name = styled.Text`
    color: #32264d;
    font-size: 20px;
`;