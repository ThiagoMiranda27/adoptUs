import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import MyPetsItem from '../../components/myPetsItem';

import {HeaderContainer, TopBar, BorderlessButton, Container, TextHeader} from './styles';

const MyPets: React.FC = () => {
    const navigation = useNavigation();

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
            >
                    <Container style={{backgroundColor:'#854695'}}>

                    <MyPetsItem></MyPetsItem>
                    <MyPetsItem></MyPetsItem>
                    <MyPetsItem></MyPetsItem>
                    <MyPetsItem></MyPetsItem>
                    
                    </Container>
                </ScrollView>
        
    
        </>
    );
}

export default MyPets;