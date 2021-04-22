import React from 'react';

import {Container, Profile, Avatar, ProfileInfo, Name} from './styles';

const MyPetsItem: React.FC = () => {

    return(
        <Container>
            <Profile>
                <Avatar source={{uri: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/BR/pt/19/UP2477-CUSA06694_00-AV00000000000039/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000'}} ></Avatar>

                <ProfileInfo>
                    <Name>'nome'</Name>
                </ProfileInfo>
            </Profile>
        </Container>
    );
}

export default MyPetsItem;