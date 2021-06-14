import React, {useRef, useCallback, useState} from 'react';
import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Alert from 'react-native-awesome-alerts';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import Input from '../../components/input';
import Button from '../../components/button';

import {Container, Title, BackToSignInButton, BackToSignInButtonText} from './styles';

interface SignUpFormData {
    name: string;
    user: string;
    password: string;
    email: string;
    phone: string;
}

const SignUp: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const navigation = useNavigation();

    const formRef = useRef<FormHandles>(null);

    const handleSignUp = async (data: SignUpFormData) => {
        const params = {
            nome: data.name,
            login: data.user,
            senha: data.password,
            celular: data.phone,
            email: data.email
        }

        console.log(params);

        //verificar campos nulos
        if(data.name === "" || data.user === "" || data.password === "" || data.email === "" || data.phone === ""){
            console.log('campo null')
            setShowAlert(true)
            return;
        }

        //verificar LOGIN já existente
        // {
                //TODO
        // }
        
        const response = await api.post('/signup', params);
        console.log(response.data.message);
        
        if(response.data.status != 200)
            setShowAlert(true);
        else
            navigation.navigate('SuccessSignUp');
    };

    

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

                        <View>
                            <Title>Crie sua conta</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignUp}>
                            <Input name="name" icon="user" placeholder="Nome"/>
                            <Input name="user" icon="user" placeholder="Usuário"/>
                            <Input name="password" icon="lock" placeholder="Senha" password={true}/>
                            <Input name="email" icon="mail" placeholder="E-mail"/>
                            <Input name="phone" icon="phone" placeholder="Celular"/>
                            
                            <Button onPress={() => { 
                                formRef.current?.submitForm();
                            }
                        }>Cadastrar</Button>
                        </Form>

                        <Alert
                            show={showAlert}
                            showProgress={false}
                            title="Erro ao cadastrar"
                            message="Campo(s) incorreto(s)."
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

            <BackToSignInButton onPress={() => {navigation.navigate('SignIn')}}>
                <Icon name="arrow-left" size={20} color="#fed26f" />
                <BackToSignInButtonText>Voltar para Login</BackToSignInButtonText>
            </BackToSignInButton>
        </>
    );
}

export default SignUp;