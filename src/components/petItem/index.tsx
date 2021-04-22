import React from 'react';

import whatsAppIcon from '../../assets/whatsapp.png';

import {Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, ContactButton, ButtonsContainer, ContactButtonText, TextBio} from './styles';
import { Image } from 'react-native';

const PetItem: React.FC = () => {

    //get de todos cadastrados. Renderiza com um .map

    return(
        <Container>
            <Profile>
                <Avatar source={{uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/pt/19/UP2477-CUSA06694_00-AV00000000000039/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000'}} ></Avatar>

                <ProfileInfo>
                    <Name>'name'</Name>
                    <Subject>Desde 'data_cadastro'</Subject>
                </ProfileInfo>
            </Profile>
            <Bio>
                <TextBio>Tipo: 'string'</TextBio>
                <TextBio>Vacinado: 'bool'</TextBio>
            </Bio>
            <Bio>
                <TextBio>Raça: 'string'</TextBio>
                <TextBio>Castrado: 'bool'</TextBio>
            </Bio>
            <Bio>
                <TextBio>Sexo: 'string'</TextBio>
                <TextBio>Vermifugado: 'bool'</TextBio>
            </Bio>
            <Bio>
                <TextBio>Porte: 'string'</TextBio>
            </Bio>
            <Bio>
                <TextBio>Biografia: 'string'</TextBio>
            </Bio>

            <Footer>
                <ButtonsContainer>
                    <ContactButton>
                        <Image source={whatsAppIcon}></Image>
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
}

export default PetItem;