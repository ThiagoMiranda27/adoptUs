import React, {useRef, useCallback} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import InputWithoutIcon from '../../components/inputSemIcone';
import Button from '../../components/button';

import {useNavigation} from '@react-navigation/native';

import {Container, HeaderContainer, BorderlessButton, TextHeader, TopBar, PhotoBox, PhotoView, PhotoText, PickerView} from './styles';

const AddPet: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation();

    const handleAddPet = useCallback((data: object) => {
        console.log(data);
        //verificacao
        navigation.navigate('SuccessAdoption');
    }, []);

    const handleChoosePhoto = () => {
        launchImageLibrary({
            mediaType: 'photo',
        }, response => {
            console.log(response);
            if(response.uri != null){
                //add foto na tabela FOTOS_PETS com ID_PET do novo
            }
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

                <Container style={{backgroundColor:'#235cba'}}>
                
                    <PhotoView>
                            <PhotoBox onPress={handleChoosePhoto} >
                                <Icon name="plus" size={54} color={'#fff'}></Icon>
                            </PhotoBox>
                            <PhotoText>Coloque uma foto do pet</PhotoText>
                    </PhotoView>

                    <Form ref={formRef} onSubmit={handleAddPet}>
                        {/* id = UUID  */}
                            
                        {/* desde data_cadastro = DateTime.Now */}

                        <InputWithoutIcon name="name" placeholder="Nome" />

                        {/* <PickerView>
                            <Picker
                                selectedValue="Selecione uma opção"
                                style={{height: 60}}
                                prompt='Animal'
                            >
                                <Picker.Item label="Animal" value="0" />
                                <Picker.Item label="Cachorro" value="1" />
                                <Picker.Item label="Gato" value="2" />
                                
                            </Picker>
                        </PickerView> */}
                        <InputWithoutIcon name="animal" placeholder="Animal" />

                        <InputWithoutIcon name="raca" placeholder="Raça" />

                        {/* <PickerView>
                            <Picker
                                selectedValue="Selecione uma opção"
                                style={{height: 60}}
                                prompt='Sexo'
                            >
                                <Picker.Item label="Sexo" value="0" />
                                <Picker.Item label="Macho" value="1" />
                                <Picker.Item label="Fêmea" value="2" />
                            </Picker>
                        </PickerView> */}
                        <InputWithoutIcon name="sexo" placeholder="Sexo" />

                        {/* <PickerView>
                            <Picker
                                selectedValue="Selecione uma opção"
                                style={{height: 60}}
                                prompt='Porte'
                            >
                                <Picker.Item label="Porte" value="0" />
                                <Picker.Item label="Pequeno" value="1" />
                                <Picker.Item label="Médio" value="2" />
                                <Picker.Item label="Grande" value="3" />
                            </Picker>
                        </PickerView> */}
                        <InputWithoutIcon name="porte" placeholder="Porte" />

                        {/* <PickerView>
                            <Picker
                                selectedValue="Selecione uma opção"
                                style={{height: 60}}
                                prompt='Vacinado'
                            >
                                <Picker.Item label="Vacinado" value="0" />
                                <Picker.Item label="Sim" value="1" />
                                <Picker.Item label="Não" value="2" />
                            </Picker>
                        </PickerView> */}
                        <InputWithoutIcon name="vacinado" placeholder="Vacinado" />

                        {/* <PickerView>
                            <Picker
                                selectedValue="Selecione uma opção"
                                style={{height: 60}}
                                prompt='Castrado'
                            >
                                <Picker.Item label="Castrado" value="0" />
                                <Picker.Item label="Sim" value="1" />
                                <Picker.Item label="Não" value="2" />
                            </Picker>
                        </PickerView> */}
                        <InputWithoutIcon name="castrado" placeholder="Castrado" />

                        {/* <PickerView>
                            <Picker
                                selectedValue="Selecione uma opção"
                                style={{height: 60}}
                                prompt='Vermifugado'
                            >
                                <Picker.Item label="Vermifugado" value="0" enabled={true} />
                                <Picker.Item label="Sim" value="1" />
                                <Picker.Item label="Não" value="2" />
                            </Picker>
                        </PickerView> */}
                        <InputWithoutIcon name="vermifugado" placeholder="Vermifugado" />

                        <InputWithoutIcon name="description" placeholder="Descrição" />

                        <InputWithoutIcon name="contact" placeholder="Contado do(a) dono(a)" />

                        {/* ID do dono (usuario) */}

                        <Button
                            onPress={()=>{
                                    formRef.current?.submitForm();
                            }}>
                                Colocar para adoção
                        </Button>
                    </Form>
                    
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
        </>
    );
}

export default AddPet;