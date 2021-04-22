import React, {useCallback, useRef} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation} from '@react-navigation/native'

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.png';

import {Container, Title, CreateAccountButton, CreateAccountButtonText, Logo} from './styles';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation();

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
        //verificacao
        navigation.navigate('Init');
    }, []);

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
                        <Image source={logoImg}/>

                        {/* <Logo source={logoImg}></Logo> */}

                        <View>
                            <Title>Faça seu login</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignIn}>
                            <Input name="user" icon="user" placeholder="Usuário"/>
                            <Input name="password" icon="lock" placeholder="Senha" password={true}/>

                            <Button
                                onPress={()=>{
                                    formRef.current?.submitForm();
                                }}
                            >
                                Entrar
                            </Button>
                        </Form>
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