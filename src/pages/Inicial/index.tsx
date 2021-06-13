import React, { useState } from 'react';
import {ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import PetItem, {Pet} from '../../components/petItem';

import api from '../../services/api';

import {HeaderContainer, TopBar, BorderlessButton, Container, TextHeader} from './styles';

const Inicial: React.FC = () => {
    const navigation = useNavigation();

    const [pets, setPets] = useState([]);

    async function loadPets() {
        try {
            const response = await api.get("/pets");
            // console.log(response.data)
            setPets(response.data)
          } catch (err) {
            console.error(err)
          }
    }

    useFocusEffect(
        React.useCallback(() => {
            loadPets();
        }, [])
    );

    return(
        <>
            <HeaderContainer>
                <TopBar>
                    <Text></Text>
                    <TextHeader>Adopt Us</TextHeader>
                <BorderlessButton onPress={() => {navigation.navigate('EditProfile')}}>
                    <Icon name="user" size={34} color={'#fff'}></Icon>
                </BorderlessButton>
                </TopBar>
            </HeaderContainer>

            <Container style={{backgroundColor:'#b07b61'}}>
            <ScrollView
                keyboardShouldPersistTaps='handled'
                horizontal={true}
            >
                
                {pets.map((pet: Pet, index) => {
                    return (
                        <PetItem 
                            key={index}
                            pet={pet}
                        />
                    )
                })}
                
            </ScrollView>
            </Container>
        </>
    );
}

export default Inicial;