import React, {useRef, useCallback} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// import RNPickerSelect from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';
import PickerSelect from '../../components/pickerSelect';

import {Container, Title, BackToSignInButton, BackToSignInButtonText} from './styles';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    const formRef = useRef<FormHandles>(null);

    const handleSignUp = useCallback((data: object) => {
        console.log(data);
        //novo usuario
        navigation.navigate('SuccessSignUp');
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

                        <View>
                            <Title>Crie sua conta</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignUp}>
                            <Input name="name" icon="user" placeholder="Nome"/>
                            <Input name="user" icon="user" placeholder="Usuário"/>
                            <Input name="password" icon="lock" placeholder="Senha" password={true}/>
                            <Input name="email" icon="mail" placeholder="E-mail"/>
                            <Input name="phone" icon="phone" placeholder="Celular"/>

                            {/* <Input name="date" icon="calendar" placeholder="Data de nascimento"/> */}

                            

                            {/* estado
                            cidade */}

                            <Button onPress={() => { 
                                formRef.current?.submitForm();
                            }
                        }>Cadastrar</Button>
                        </Form>
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