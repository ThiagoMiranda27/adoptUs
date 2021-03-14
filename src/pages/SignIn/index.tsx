import React from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.png';

import {Container, Title, CreateAccountButton, CreateAccountButtonText} from './styles';

const SignIn: React.FC = () => {
    const navigation = useNavigation();

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
                        <Image source={logoImg} />

                        <View>
                            <Title>Faça seu login</Title>
                        </View>

                        <Input name="user" icon="user" placeholder="Usuário"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button onPress={() => {console.log("entrou")}}>Entrar</Button>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => {navigation.navigate('SignUp')}}>
                <Icon name="log-in" size={20} color="#f2f5f9" />
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
}

export default SignIn;