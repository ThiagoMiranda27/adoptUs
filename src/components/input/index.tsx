import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, TextInput, Icon} from './styles';

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    password? : boolean
}

interface InputValueReference {
    value: string;
}

const Input: React.FC<InputProps> = ({name, icon, password, ...rest}) => {
    const {registerField, defaultValue = '', fieldName, error} = useField(name);
    const inputValueRef = useRef<InputValueReference>({value: defaultValue});

    function handleChange(value: string){

    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

        return (
            <Container>
                <Icon name={icon} size={20} color="#666360"/>

                <TextInput
                    secureTextEntry = {password}
                    placeholderTextColor = "#666360"
                    defaultValue = {defaultValue}
                    onChangeText={(value) => {
                        handleChange(value)
                        inputValueRef.current.value = value;
                    }}
                    {...rest} 
                />
            </Container> 
        )  
};

export default Input;