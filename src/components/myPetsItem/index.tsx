import React from 'react';

import {Container, Profile, Avatar, ProfileInfo, Name} from './styles';

export interface Pet {
    id: number;
    nome: string;
    link_foto: string;
}

interface PetProps {
    pet: Pet;
}

const MyPetsItem: React.FC<PetProps> = ({pet}) => {

    return(
        <Container>
            <Profile>
                <Avatar source={{uri: pet.link_foto}} ></Avatar>

                <ProfileInfo>
                    <Name>{pet.nome}</Name>
                </ProfileInfo>
            </Profile>
        </Container>
    );
}

export default MyPetsItem;