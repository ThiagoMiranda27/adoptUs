import React, {useRef, useCallback} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import {Container, HeaderContainer, BorderlessButton, TextHeader, TopBar} from './styles';

const EditProfile: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation();

    const handleEditProfie = useCallback((data: object) => {
        console.log(data);
        //verificacao
        navigation.navigate('Inicial');
    }, []);

    return(
        <>
        <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' : undefined}
            enabled
        >
            <HeaderContainer>
                <TopBar>
                <BorderlessButton onPress={() => {navigation.navigate('Inicial')}}>
                    <Icon name="arrow-left" size={34} color={'#fff'}></Icon>
                </BorderlessButton>
                <TextHeader>Editar perfil</TextHeader>
                <Text></Text>
                </TopBar>
            </HeaderContainer>

            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{flex: 1}}
            >
                    <Container style={{backgroundColor:'#235cba'}}>

                        <Form ref={formRef} onSubmit={handleEditProfie}>
                            <Input name="name" icon="user" placeholder="Nome"/>
                            <Input name="phone" icon="phone" placeholder="Celular"/>
                            <Input name="date" icon="calendar" placeholder="Data de nascimento"/>

                            <Button onPress={()=>{
                                    formRef.current?.submitForm();
                                }}>Salvar</Button>
                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
}

export default EditProfile;