import styled from 'styled-components/native'

export const Container = styled.View`
    margin-left: 40px;
    margin-right: 40px;
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
    padding: 24px;
`;

export const Avatar = styled.Image`
    width: 120px;
    height: 120px;
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

export const Subject = styled.Text`
    color: #6a6180;
    font-size: 12px;
    margin-top: 4px;
`;

export const Bio = styled.View`
    flex-direction: row;
    font-size: 14px;
    line-height: 24px;
    color: #646180;
    margin-left: 24px;
    margin-right: 24px;
    justify-content: space-between;
`;

export const TextBio = styled.Text`
    font-size: 14px;
    margin-bottom: 7px;
`;

export const TextBiografia = styled.Text`
    font-size: 14px;
    margin-bottom: 7px;
    width: 280px;
`;

export const Footer = styled.View`
    color: #fafafc;
    padding: 24px;
    align-items: center;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    padding: 24px;
`;

export const ContactButton = styled.TouchableOpacity`
    background-color: #04d361;
    flex: 1;
    height: 56px;
    flex-direction: row;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 16px;
`;