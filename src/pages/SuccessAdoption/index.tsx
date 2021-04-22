import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/button';

import {Container, Title} from './styles';

const SuccessAdoption: React.FC = () => {
    const navigation = useNavigation();

    return(
        <>
            <Container style={{backgroundColor:'#235cba'}}>
                <View>
                    <Icon name="check" size={80} color="#fff" />
                </View>
                <View>
                    <Title>Obrigado pela sua iniciativa!</Title>
                </View>

                <Button onPress={() => {navigation.navigate('MyPets')}}>Ok</Button>
            </Container>

            
            
        </>
    );
}

export default SuccessAdoption;