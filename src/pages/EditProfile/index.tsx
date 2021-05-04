import React, {useRef, useCallback, useState} from 'react';
import {Image, View, KeyboardAvoidingView, Platform, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import DateTimePicker from '@react-native-community/datetimepicker';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useNavigation} from '@react-navigation/native';

import Input from '../../components/input';
import Button from '../../components/button';

import {Container, HeaderContainer, BorderlessButton, TextHeader, TopBar, ButtonDatePicker} from './styles';

const EditProfile: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleToggleDatePicker = useCallback(() => {
        setShowDatePicker((state) => !state);
    }, []);

    const handleDateChange = useCallback((event: any, date: Date | undefined) => {
        if(Platform.OS == 'android'){
            setShowDatePicker(false);
        }

        if(date){
            setSelectedDate(selectedDate);
        }
    },[])

    const formRef = useRef<FormHandles>(null)

    const navigation = useNavigation();

    const handleEditProfie = useCallback((data: object) => {
        console.log(data);
        // console.log(selectedDate);
        //verificacao
    }, []);

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
                // keyboardShouldPersistTaps='handled'
                // contentContainerStyle={{flex: 1}}
            >
                    <Container style={{backgroundColor:'#235cba'}}>

                        <Form ref={formRef} onSubmit={handleEditProfie}>
                            <Input name="name" icon="user" placeholder="Nome"/>
                            <Input name="phone" icon="phone" placeholder="Celular"/>
                            <Input name="date" icon="calendar" placeholder="Data nasc.   *somente números*"/>
                            {/* <ButtonDatePicker onPress={handleToggleDatePicker}>
                                Selecionar data de nascimento
                            </ButtonDatePicker> */}
                            <Input name="email" icon="mail" placeholder="E-mail"/>
                            <Input name="estado" icon="menu" placeholder="Estado"/>
                            <Input name="cidade" icon="menu" placeholder="Cidade"/>
                            <Input name="cep" icon="menu" placeholder="Cep   *somente números*"/>
                            <Input name="rua" icon="menu" placeholder="Rua"/>
                            <Input name="numero" icon="menu" placeholder="Número"/>
                            <Input name="complemento" icon="menu" placeholder="Complemento"/>

                            {showDatePicker && <DateTimePicker 
                                mode="date"
                                display="calendar"
                                onChange={handleDateChange}
                                value ={selectedDate}
                            />}

                            <Button onPress={()=>{
                                    formRef.current?.submitForm();
                                }}>Salvar</Button>
                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
}

export default EditProfile;