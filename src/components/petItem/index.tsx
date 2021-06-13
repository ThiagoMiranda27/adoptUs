import React from 'react';

import whatsAppIcon from '../../assets/whatsapp.png';

import {Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, ContactButton, ButtonsContainer, ContactButtonText, TextBio, TextBiografia} from './styles';
import { Image, Linking } from 'react-native';

export interface Pet {
    id: number;
    NOME: string;
    DATA_CADASTRO: string;
    LINK_FOTO: string;
    TIPO_ANIMAL: string;
    VACINADO: string;
    RACA: string;
    CASTRADO: string;
    SEXO: string;
    VERMIFUGADO: string;
    PORTE: string;
    BIOGRAFIA: string;
    CONTATO: string;
}

interface PetProps {
    pet: Pet;
}

const PetItem: React.FC<PetProps> = ({pet}) => {

    function handleLinkToWhatsapp(){
        console.log('Chamou no WhatsApp!')
        Linking.openURL(`whatsapp://send?phone=${pet.CONTATO}`)
    }

    pet.VACINADO === "1" ? pet.VACINADO = "Sim" : pet.VACINADO = "Não"
    pet.CASTRADO === "1" ? pet.CASTRADO = "Sim" : pet.CASTRADO = "Não"
    pet.VERMIFUGADO === "1" ? pet.VERMIFUGADO = "Sim" : pet.VERMIFUGADO = "Não"
    pet.SEXO === "1" ? pet.SEXO = "Fêmea" : pet.SEXO = "Macho"

    return(
        <Container>
            <Profile>
                <Avatar source={{uri: pet.LINK_FOTO}} ></Avatar>

                <ProfileInfo>
                    <Name>{pet.NOME}</Name>
                    {/* <Subject>Desde {pet.DATA_CADASTRO}</Subject> */}
                </ProfileInfo>
            </Profile>
            <Bio>
                <TextBio>Tipo: {pet.TIPO_ANIMAL}</TextBio>
                <TextBio>Vacinado: {pet.VACINADO}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Raça: {pet.RACA}</TextBio>
                <TextBio>Castrado: {pet.CASTRADO}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Sexo: {pet.SEXO}</TextBio>
                <TextBio>Vermifugado: {pet.VERMIFUGADO}</TextBio>
            </Bio>
            <Bio>
                <TextBio>Porte: {pet.PORTE}</TextBio>
            </Bio>
            <Bio>
                <TextBiografia>Biografia: {pet.BIOGRAFIA}</TextBiografia>
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