import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import MyPetsItem, {Pet} from '../../components/myPetsItem';

import {HeaderContainer, TopBar, BorderlessButton, Container, TextHeader} from './styles';

const MyPets: React.FC = () => {
    const navigation = useNavigation();

    const [pets, setPets] = useState([]);

    async function loadPets() {
        const user = await AsyncStorage.getItem('@user');
        console.log(user);
        // try {
        //     const { data } = await api.get("/pets"); //COM ID DO USUARIO LOGADO
        //     console.log(data)
        //   } catch (err) {
        //     console.error(err)
        //   }
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
                    <TextHeader>Meus Pets</TextHeader>
                    <BorderlessButton onPress={() => {navigation.navigate('AddPet')}}>
                        <Icon name="plus-circle" size={34} color={'#fff'}></Icon>
                    </BorderlessButton>
                </TopBar>
            </HeaderContainer>

            <ScrollView
                keyboardShouldPersistTaps='handled'
            >
                    <Container style={{backgroundColor:'#b07b61'}}>

                    {pets.map((pet: Pet) => {
                        return (
                            <MyPetsItem 
                                key={pet.id}
                                pet={pet}
                            />
                        )})
                    }
                    
                    </Container>
                </ScrollView>
        
    
        </>
    );
}

export default MyPets;