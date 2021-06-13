import React, {useRef, useCallback, useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Alert from 'react-native-awesome-alerts';

import InputWithoutIcon from '../../components/inputSemIcone';
import Button from '../../components/button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import {useNavigation} from '@react-navigation/native';

import {Container, HeaderContainer, BorderlessButton,RadioButtonContainer, RadioButtonTitle, TextHeader, TopBar,RadioButtonText, PhotoBox, ViewRadioButton, PhotoView, PhotoText, PickerView} from './styles';

interface AddPetFormData {
    nome: string;
    data_cadastro: string;
    link_foto: string;
    tipo_animal: string;
    raca: string;
    sexo: string;
    porte: string;
    vacinado: string;
    castrado: string;
    vermifugado: string;
    contato: string;
    biografia: string;
}

export type Photo = string | undefined;

const AddPet: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const formRef = useRef<FormHandles>(null)
    const [petPhoto, setPetPhoto] = useState('' as Photo);
    const [checkedSexo, setCheckedSexo] = useState('macho');
    const [checkedVacinado, setCheckedVacinado] = useState('nao');
    const [checkedVermifugado, setCheckedVermifugado] = useState('nao');
    const [checkedCastrado, setCheckedCastrado] = useState('nao');

    const navigation = useNavigation();

    const handleAddPet = useCallback(async (data: AddPetFormData) => {
        let user_id = await AsyncStorage.getItem('@user_id');

        const params = {
            nome: data.nome,
            data_castado: Date.now(),
            link_foto: petPhoto,
            tipo_animal: data.tipo_animal,
            raca: data.raca,
            sexo: checkedSexo,
            porte: data.porte,
            vacinado: checkedVacinado,
            castrado: checkedCastrado,
            vermifugado: checkedVermifugado,
            contato: data.contato,
            biografia: data.biografia,
            id_dono: user_id
        }

        console.log(params);

        if(data.nome === "" || data.tipo_animal === "" || data.raca === "" || data.sexo === "" || data.porte === "" || data.vacinado === ""
            || data.castrado === "" || data.vermifugado === "" || data.contato === "" || data.biografia === "" || user_id === ""){
            console.log('campo null')
            setShowAlert(true);
            return;
        }
        else{
            try{
                api.post('/addpet', params)
            }catch(err){
                console.log(err)
            }
            
            navigation.navigate('SuccessAdoption');
        }
    }, []);

    const handleChoosePhoto = () => {
        launchImageLibrary({
            mediaType: 'photo',
        }, response => {
            setPetPhoto(response.uri);
        })
    }

    return(
        <>
        <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={Platform.OS == 'ios' ? 'padding' : undefined}
            enabled
        >
            <HeaderContainer>
                <TopBar>
                    <BorderlessButton onPress={() => {navigation.navigate('MyPets')}}>
                        <Icon name="arrow-left" size={34} color={'#fff'}></Icon>
                    </BorderlessButton>
                <TextHeader>Adicionar pet</TextHeader>
                <Text></Text>
                </TopBar>
            </HeaderContainer>

            <ScrollView
                keyboardShouldPersistTaps='handled'
            >

                <Container style={{backgroundColor:'#b07b61'}}>
                
                    <PhotoView>
                            <PhotoBox onPress={handleChoosePhoto} >
                                <Icon name="plus" size={54} color={'#fff'}></Icon>
                            </PhotoBox>
                            <PhotoText>Coloque uma foto do pet aqui</PhotoText>
                    </PhotoView>

                    <Form ref={formRef} onSubmit={handleAddPet}>
                        <InputWithoutIcon name="nome" placeholder="Nome" />
                        <InputWithoutIcon name="tipo_animal" placeholder="Animal" />
                        <InputWithoutIcon name="raca" placeholder="Raça" />
                        <RadioButtonContainer>
                            <RadioButtonTitle>Sexo</RadioButtonTitle>
                            <RadioButtonText>Macho</RadioButtonText>
                            <RadioButton
                                value='0'
                                color= '#235cba'
                                status={checkedSexo === '0' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedSexo('0')
                                }}
                            />
                            <RadioButtonText>Fêmea</RadioButtonText>
                            <RadioButton
                                value='1'
                                color= '#235cba'
                                status={checkedSexo === '1' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedSexo('1')
                                }}
                            />
                        </RadioButtonContainer>
                        <InputWithoutIcon name="porte" placeholder="Porte" />
                        <RadioButtonContainer>
                            <RadioButtonTitle>Vacinado</RadioButtonTitle>
                            <RadioButtonText>Sim</RadioButtonText>
                            <RadioButton
                                value='1'
                                color= '#235cba'
                                status={checkedVacinado === '1' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVacinado('1')
                                }}
                            />
                            <RadioButtonText>Não</RadioButtonText>
                            <RadioButton
                                value='0'
                                color= '#235cba'
                                status={checkedVacinado === '0' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVacinado('0')
                                }}
                            />
                        </RadioButtonContainer>
                        <RadioButtonContainer>
                            <RadioButtonTitle>Castrado</RadioButtonTitle>
                            <RadioButtonText>Sim</RadioButtonText>
                            <RadioButton
                                value='1'
                                color= '#235cba'
                                status={checkedCastrado === '1' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedCastrado('1')
                                }}
                            />
                            <RadioButtonText>Não</RadioButtonText>
                            <RadioButton
                                value='0'
                                color= '#235cba'
                                status={checkedCastrado === '0' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedCastrado('0')
                                }}
                            />
                        </RadioButtonContainer>
                        <RadioButtonContainer>
                            <RadioButtonTitle>Vermifugado</RadioButtonTitle>
                            <RadioButtonText>Sim</RadioButtonText>
                            <RadioButton
                                value='1'
                                color= '#235cba'
                                status={checkedVermifugado === '1' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVermifugado('1')
                                }}
                            />
                            <RadioButtonText>Não</RadioButtonText>
                            <RadioButton
                                value='0'
                                color= '#235cba'
                                status={checkedVermifugado === '0' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVermifugado('0')
                                }}
                            />
                        </RadioButtonContainer>
                        <InputWithoutIcon name="contato" placeholder="Contado do(a) dono(a)" />
                        <InputWithoutIcon name="biografia" placeholder="Descrição do pet" />                    

                        <Button
                            onPress={()=>{
                                    formRef.current?.submitForm();
                            }}>
                                Colocar para adoção
                        </Button>


                        <Alert
                            show={showAlert}
                            showProgress={false}
                            title="Erro ao adicionar pet para adoção"
                            message="Campo(s) inválido(s)."
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

                    </Form>
                    
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
        </>
    );
}

export default AddPet;