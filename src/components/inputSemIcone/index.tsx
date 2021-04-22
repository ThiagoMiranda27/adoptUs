import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
    name: string;
}

interface InputValueReference {
    value: string;
}

const InputWithoutIcon: React.FC<InputProps> = ({name, ...rest}) => {
    const {registerField, defaultValue = '', fieldName, error} = useField(name);
    const inputValueRef = useRef<InputValueReference>({value: defaultValue});

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container>
        <TextInput
            placeholderTextColor="#000"
            defaultValue = {defaultValue}
            onChangeText={(value) => {
                inputValueRef.current.value = value;
            }}
            {...rest} /> 
    </Container>
    )
    
}

export default InputWithoutIcon; 