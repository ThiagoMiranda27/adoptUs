import React, {useRef, useCallback, useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import InputWithoutIcon from '../../components/inputSemIcone';
import Button from '../../components/button';

import {useNavigation} from '@react-navigation/native';

import {Container, HeaderContainer, BorderlessButton,RadioButtonContainer, RadioButtonTitle, TextHeader, TopBar,RadioButtonText, PhotoBox, ViewRadioButton, PhotoView, PhotoText, PickerView} from './styles';

const AddPet: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const [petPhoto, setPetPhoto] = useState('');
    const [checkedSexo, setCheckedSexo] = useState('macho');
    const [checkedVacinado, setCheckedVacinado] = useState('nao');
    const [checkedVermifugado, setCheckedVermifugado] = useState('nao');
    const [checkedCastrado, setCheckedCastrado] = useState('nao');

    const navigation = useNavigation();

    const handleAddPet = useCallback((data: object) => {
        console.log(data);
        // console.log('data_cadastro:' + new Date())
        console.log(checkedSexo)
        console.log(checkedVacinado)
        console.log(checkedCastrado)
        console.log(checkedVermifugado)
        //verificacao
        navigation.navigate('SuccessAdoption');
    }, []);

    const handleChoosePhoto = () => {
        launchImageLibrary({
            mediaType: 'photo',
        }, response => {
            // setPetPhoto(response.uri);
            console.log(response);
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
                        <InputWithoutIcon name="animal" placeholder="Animal" />
                        <InputWithoutIcon name="raca" placeholder="Raça" />
                        {/* <InputWithoutIcon name="sexo" placeholder="Sexo" /> */}
                        <RadioButtonContainer>
                            <RadioButtonTitle>Sexo</RadioButtonTitle>
                            <RadioButtonText>Macho</RadioButtonText>
                            <RadioButton
                                value='macho'
                                color= '#235cba'
                                status={checkedSexo === 'macho' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedSexo('macho')
                                    // console.log(checked)
                                }}
                            />
                            <RadioButtonText>Fêmea</RadioButtonText>
                            <RadioButton
                                value='femea'
                                color= '#235cba'
                                status={checkedSexo === 'femea' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedSexo('femea')
                                    // console.log(checked)
                                }}
                            />
                        </RadioButtonContainer>
                        <InputWithoutIcon name="porte" placeholder="Porte" />
                        {/* <InputWithoutIcon name="vacinado" placeholder="Vacinado" /> */}
                        <RadioButtonContainer>
                            <RadioButtonTitle>Vacinado</RadioButtonTitle>
                            <RadioButtonText>Sim</RadioButtonText>
                            <RadioButton
                                value='sim'
                                color= '#235cba'
                                status={checkedVacinado === 'sim' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVacinado('sim')
                                    // console.log(checked)
                                }}
                            />
                            <RadioButtonText>Não</RadioButtonText>
                            <RadioButton
                                value='nao'
                                color= '#235cba'
                                status={checkedVacinado === 'nao' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVacinado('nao')
                                    // console.log(checked)
                                }}
                            />
                        </RadioButtonContainer>
                        {/* <InputWithoutIcon name="castrado" placeholder="Castrado" /> */}
                        <RadioButtonContainer>
                            <RadioButtonTitle>Castrado</RadioButtonTitle>
                            <RadioButtonText>Sim</RadioButtonText>
                            <RadioButton
                                value='sim'
                                color= '#235cba'
                                status={checkedCastrado === 'sim' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedCastrado('sim')
                                    // console.log(checked)
                                }}
                            />
                            <RadioButtonText>Não</RadioButtonText>
                            <RadioButton
                                value='nao'
                                color= '#235cba'
                                status={checkedCastrado === 'nao' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedCastrado('nao')
                                    // console.log(checked)
                                }}
                            />
                        </RadioButtonContainer>
                        {/* <InputWithoutIcon name="vermifugado" placeholder="Vermifugado" /> */}
                        <RadioButtonContainer>
                            <RadioButtonTitle>Vermifugado</RadioButtonTitle>
                            <RadioButtonText>Sim</RadioButtonText>
                            <RadioButton
                                value='sim'
                                color= '#235cba'
                                status={checkedVermifugado === 'sim' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVermifugado('sim')
                                    // console.log(checked)
                                }}
                            />
                            <RadioButtonText>Não</RadioButtonText>
                            <RadioButton
                                value='nao'
                                color= '#235cba'
                                status={checkedVermifugado === 'nao' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setCheckedVermifugado('nao')
                                    // console.log(checked)
                                }}
                            />
                        </RadioButtonContainer>
                        <InputWithoutIcon name="contact" placeholder="Contado do(a) dono(a)" />
                        <InputWithoutIcon name="description" placeholder="Descrição do pet" />
                        {/* ID do dono (usuario) */}

                        

                        
                        <Button
                            onPress={()=>{
                                    formRef.current?.submitForm();
                            }}>
                                Colocar para adoção
                        </Button>





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
                        
                    </Form>
                    
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
        </>
    );
}

export default AddPet;