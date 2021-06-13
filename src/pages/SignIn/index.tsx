import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Alert from 'react-native-awesome-alerts';

import {useNavigation} from '@react-navigation/native'

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import {Container, Title, CreateAccountButton, CreateAccountButtonText} from './styles';

interface SignInFormData {
    user: string;
    password: string;
}

const SignIn: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation();

    // const checkLogin = async () => {
    //     const user = await AsyncStorage.getItem('@user');
    //     if(user){
    //         navigation.navigate('Init');
    //     }
    // }

    // useEffect(() => {
    //     checkLogin();
    // }, [])

    const handleSignIn = async (data: SignInFormData) => {
        const params = {
            login: data.user,
            senha: data.password
        }

        // console.log(params);

        // verificar campos nulos
        if(data.user === "" || data.password === ""){
            console.log('campo null')
            setShowAlert(true)
            return;
        }

        const response = await api.post('/signin', params);
        console.log('User ID: ', response.data.message[0].ID_USUARIO)
        console.log(response.data.message.length)

        if(response.data.message.length !== 1)
            setShowAlert(true);
        else {
            await AsyncStorage.setItem('@user_id', JSON.stringify(response.data.message[0].ID_USUARIO))
            await AsyncStorage.setItem('@nome', JSON.stringify(response.data.message[0].NOME))
            await AsyncStorage.setItem('@celular', JSON.stringify(response.data.message[0].CELULAR))
            await AsyncStorage.setItem('@email', JSON.stringify(response.data.message[0].EMAIL))
            navigation.navigate('Init');
        }
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
                    <Container style={{backgroundColor:'#b07b61'}}>
                        <Image source={logoImg}/>

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

                        <Alert
                            show={showAlert}
                            showProgress={false}
                            title="Erro ao realizar login"
                            message="Usuário ou senha incorretos."
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={true}
                            showCancelButton={false}
                            showConfirmButton={true}
                            confirmText="Tentar novamente"
                            confirmButtonColor="#DD6B55"
                            onConfirmPressed={() => {
                                setShowAlert(false);
                            }}
                            onCancelPressed={()=>{
                                setShowAlert(false);
                            }}
                        >
                        </Alert>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => {navigation.navigate('SignUp')}}>
                <Icon name="log-in" size={20} color="#fed26f" />
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
}

export default SignIn;