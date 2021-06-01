import React from 'react';

import whatsAppIcon from '../../assets/whatsapp.png';

import {Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, ContactButton, ButtonsContainer, ContactButtonText, TextBio} from './styles';
import { Image, Linking } from 'react-native';

export interface Pet {
    id: number;
    nome: string;
    data_cadastro: string;
    link_foto: string;
    tipo: string;
    vacinado: string;
    raca: string;
    castrado: string;
    sexo: string;
    vermifugado: string;
    porte: string;
    biografia: string;
    contato: string;
}

interface PetProps {
    pet: Pet;
}

const PetItem: React.FC<PetProps> = ({pet}) => {

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${pet.contato}`)
    }

    return(
        <Container>
            <Profile>
                <Avatar source={{uri: pet.link_foto}} ></Avatar>

                <ProfileInfo>
                    <Name>{pet.nome}</Name>
                    <Subject>Desde {pet.data_cadastro}</Subject>
                </ProfileInfo>
            </Profile>
            <Bio>
                <TextBio>Tipo: {pet.tipo}</TextBio>
                <TextBio>Vacinado: {pet.vacinado}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Raça: {pet.raca}</TextBio>
                <TextBio>Castrado: {pet.castrado}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Sexo: {pet.sexo}</TextBio>
                <TextBio>Vermifugado: {pet.vermifugado}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Porte: {pet.porte}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Biografia: {pet.biografia}</TextBio>
            </Bio>

            <Footer>
                <ButtonsContainer>
                    <ContactButton onPress={handleLinkToWhatsapp}>
                        <Image source={whatsAppIcon}></Image>
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
}

export default PetItem;