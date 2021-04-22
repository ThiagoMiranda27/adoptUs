import styled from 'styled-components/native'

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
    text-align: right;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextHeader = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

// export const Title = styled.Text`
//     font-size: 24px;
//     color: #f4ede8;
//     font-family: 'RobotoSlab-Medium';
//     margin: 90px 0 24px;
// `;

// export const BackButton = styled.TouchableOpacity`
//     position: absolute;
//     left: 0;
//     right: 0;
//     margin-left: 10px;
//     background: #235cba;
//     padding: 16px 0 ${16 + getBottomSpace()}px;

//     align-items: center;
//     flex-direction: row;
// `;

// export const BackButtonText = styled.Text`
//     color: #fff;
//     font-size: 18px;
//     font-family: 'RobotoSlab-Regular';
//     margin-left: 140px;
// `;

// export const Texto = styled.Text`
//     color: #fff;
//     width: 50%;
// `;

// export const TextoDescicao = styled.Text`
//     color: #fff;
//     width: 100%;
//     margin-bottom: 10px;
// `;

// export const Foto = styled.View`
//     width: 250px;
//     height: 300px;
//     margin-bottom: 30px;
//     background-color: #fff;
// `;