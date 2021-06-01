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

import {Container, Title, CreateAccountButton, CreateAccountButtonText, Logo} from './styles';

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
        const params = [
            data.user,
            data.password
        ]

        console.log(params);

        // const response = await api.post('/signin', params);

        // console.log(response.data);

        // if(true) //response.status != 200
        //     setShowAlert(true);
        // else {
            await AsyncStorage.setItem('@user', JSON.stringify(params))
            navigation.navigate('Init');
        // }
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
                    <Container style={{backgroundColor:'#864691'}}>
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