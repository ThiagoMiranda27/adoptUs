import React from 'react';

import {Container, Profile, Avatar, ProfileInfo, Name} from './styles';

export interface Pet {
    ID: number;
    NOME: string;
    LINK_FOTO: string;
}

interface PetProps {
    pet: Pet;
}

const MyPetsItem: React.FC<PetProps> = ({pet}) => {

    return(
        <Container>
            <Profile>
                <Avatar source={{uri: pet.LINK_FOTO}} ></Avatar>

                <ProfileInfo>
                    <Name>{pet.NOME}</Name>
                </ProfileInfo>
            </Profile>
        </Container>
    );
}

export default MyPetsItem;