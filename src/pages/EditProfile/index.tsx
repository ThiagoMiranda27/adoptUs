import React, {useRef, useCallback, useState} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Alert from 'react-native-awesome-alerts';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import {Container, HeaderContainer, BorderlessButton, TextHeader, TopBar, ButtonDatePicker} from './styles';

interface EditProfileFormData {
    name: string;
    phone: string;
    email: string;
}

const EditProfile: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');

    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation();

    async function loadData() {
        let nomeStorage = await AsyncStorage.getItem('@nome');
        let celularStorage = await AsyncStorage.getItem('@celular');
        let emailStorage = await AsyncStorage.getItem('@email');

        setNome(nomeStorage.slice(1, -1))
        setCelular(celularStorage.slice(1, -1));
        setEmail(emailStorage.slice(1, -1));
    }

    useFocusEffect(
        React.useCallback(() => {
            loadData();
        }, [])
    );

    const handleEditProfie = async(data: EditProfileFormData) => {

        const user_id = await AsyncStorage.getItem('@user_id');
        console.log(user_id);

        console.log(data);

        const params = {
            id_usuario: user_id,
            nome: data.name,
            celular: data.phone,
            email: data.email
        }

        if(data.name === "" || data.phone === "" || data.email === ""){
            console.log('campo null')
            setShowAlert(true);
            return;
        }
        else{
            api.put('/editprofile', params)//TODO
                setShowAlertSuccess(true)
        }
    };

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
                    <Container style={{backgroundColor:'#b07b61'}}>

                        <Form ref={formRef} onSubmit={handleEditProfie}>
                            <Input name="name" icon="user" placeholder="Nome" defaultValue={nome}/>
                            <Input name="phone" icon="phone" placeholder="Celular" defaultValue={celular}/>
                            <Input name="email" icon="mail" placeholder="E-mail" defaultValue={email}/>
                            {/* SENHA */}

                            <Button onPress={()=>{
                                    formRef.current?.submitForm();
                                }}>Salvar</Button>
                        </Form>

                        <Alert
                            show={showAlert}
                            showProgress={false}
                            title="Erro ao editar perfil"
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

                        <Alert
                            show={showAlertSuccess}
                            showProgress={false}
                            title="Alteração concluída!"
                            closeOnTouchOutside={true}
                            closeOnHardwareBackPress={true}
                            showCancelButton={false}
                            showConfirmButton={true}
                            confirmText="OK"
                            confirmButtonColor="#fed26f"
                            onConfirmPressed={() => {
                                setShowAlertSuccess(false);
                                navigation.navigate('Init');
                            }}
                            onCancelPressed={()=>{
                                setShowAlertSuccess(false);
                            }}
                        >
                        </Alert>
                        
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
}

export default EditProfile;