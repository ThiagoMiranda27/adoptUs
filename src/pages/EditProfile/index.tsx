import React from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import {Container, Title, BackButton, BackButtonText} from './styles';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    const Salvar = () => {
        console.log('editou perfil');
    }

    return(
        <>
        <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{flex: 1}}
            >
                    <Container style={{backgroundColor:'#235cba'}}>

                        <View>
                            <Title>Editar perfil</Title>
                        </View>

                        <Input name="name" icon="user" placeholder="Nome"/>
                        <Input name="phone" icon="phone" placeholder="Celular"/>
                        <Input name="date" icon="calendar" placeholder="Data de nascimento"/>

                        <Button onPress={Salvar}>Salvar</Button>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackButton onPress={() => {navigation.navigate('SignIn')}}>
                <Icon name="arrow-left" size={20} color="#fff" />
                <BackButtonText>Voltar</BackButtonText>
            </BackButton>

        </>
    );
}

export default SignUp;