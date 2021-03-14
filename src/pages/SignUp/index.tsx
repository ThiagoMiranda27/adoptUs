import React from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import {Container, Title, BackToSignInButton, BackToSignInButtonText} from './styles';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    const Cadastrar = () => {
        console.log('cadastrou');
        if(true) //cadastrar no banco
            navigation.navigate('SuccessSignUp')
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
                            <Title>Crie sua conta</Title>
                        </View>

                        <Input name="name" icon="user" placeholder="Nome"/>
                        <Input name="user" icon="user" placeholder="Usuário"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>
                        <Input name="phone" icon="phone" placeholder="Celular"/>
                        <Input name="date" icon="calendar" placeholder="Data de nascimento"/>

                        <Button onPress={Cadastrar}>Cadastrar</Button>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignInButton onPress={() => {navigation.navigate('SignIn')}}>
                <Icon name="arrow-left" size={20} color="#fff" />
                <BackToSignInButtonText>Voltar para Login</BackToSignInButtonText>
            </BackToSignInButton>
        </>
    );
}

export default SignUp;