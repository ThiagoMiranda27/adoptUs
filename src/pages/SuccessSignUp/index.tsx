import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/button';

import {Container, Title} from './styles';

const SuccessSignUp: React.FC = () => {
    const navigation = useNavigation();

    return(
        <>
            <Container style={{backgroundColor:'#b07b61'}}>
                <View>
                    <Icon name="check" size={80} color="#fff" />
                </View>
                <View>
                    <Title>Cadastramento concluído</Title>
                </View>

                <Button onPress={() => {navigation.navigate('SignIn')}}>Ok</Button>
            </Container>
        </>
    );
}

export default SuccessSignUp;