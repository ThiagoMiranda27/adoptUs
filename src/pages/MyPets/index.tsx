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
        const user_id = await AsyncStorage.getItem('@user_id');
        try {
            const response = await api.get("/mypets", { params: { id_dono: user_id } });
            // console.log(response.data)
            setPets(response.data.message);
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

                    {pets.map((pet: Pet, index) => {
                        return (
                            <MyPetsItem 
                                key={index}
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