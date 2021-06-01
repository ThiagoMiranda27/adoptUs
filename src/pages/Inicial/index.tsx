import React, { useState } from 'react';
import {ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import PetItem, {Pet} from '../../components/petItem';

import api from '../../services/api';

import {HeaderContainer, TopBar, BorderlessButton, Container, TextHeader} from './styles';

const Inicial: React.FC = () => {
    const navigation = useNavigation();

    const [pets, setPets] = useState([]);

    async function loadPets() {
        try {
            const { data } = await api.get("/pets");
            console.log(data)
          } catch (err) {
            console.error(err)
          }
    }

    useFocusEffect(
        React.useCallback(() => {
            loadPets();
        }, [])
    );

    return(
        <>
            <HeaderContainer>
                <TopBar>
                    <Text></Text>
                    <TextHeader>Adopt Us</TextHeader>
                <BorderlessButton onPress={() => {navigation.navigate('EditProfile')}}>
                    <Icon name="user" size={34} color={'#fff'}></Icon>
                </BorderlessButton>
                </TopBar>
            </HeaderContainer>

            <Container style={{backgroundColor:'#b07b61'}}>
            <ScrollView
                keyboardShouldPersistTaps='handled'
                horizontal={true}
            >
                
                {pets.map((pet: Pet) => {
                    return (
                        <PetItem 
                            key={pet.id}
                            pet={pet}
                        />
                    )
                })}
                
            </ScrollView>
            </Container>
        </>


        // <Container>
        //     <Profile>
        //         <Avatar source={{uri: 'https://avatars.githubusercontent.com/u/48134316?v=4'}} ></Avatar>

        //         <ProfileInfo>
        //             <Name>'name'</Name>
        //             <Subject>Desde 'data_cadastro'</Subject>
        //         </ProfileInfo>
        //     </Profile>
        //     <Bio>
        //         'biografia'
        //     </Bio>

        //     <Footer>
        //         <Button>
        //             Entrar em contato
        //         </Button>
        //     </Footer>
        // </Container>


        // <>
        // <KeyboardAvoidingView 
        //     style={{flex: 1}}
        //     behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        //     enabled
        // >
        //     <ScrollView
        //         keyboardShouldPersistTaps='handled'
        //     >
        //             <Container style={{backgroundColor:'#235cba'}}>

        //                 <Title>Informações do Pet</Title>
                        
        //                 {/* carousel */}
        //                 <Carrosel>
        //                 </Carrosel>
        
        //                 <TextoDescicao>Em adoção desde 19/03/2021</TextoDescicao>

        //                 <View>
        //                     <View style={{flexDirection:'row'}}>
        //                         <Texto>Tipo: Cachorro</Texto>
        //                         <Texto>Vacinado: Sim</Texto>
        //                     </View>
        //                     <View style={{flexDirection:'row'}}>
        //                         <Texto>Raça: Vira-lata</Texto>
        //                         <Texto>Castrado: Sim</Texto>
        //                     </View>
        //                     <View style={{flexDirection:'row'}}>
        //                         <Texto>Sexo: Masculino</Texto>
        //                         <Texto>Vermifugado: Não</Texto>
        //                     </View>
        //                     <View style={{flexDirection:'row'}}>
        //                         <Texto>Porte: Médio</Texto>
        //                     </View>
        //                     <View style={{flexDirection:'row'}}>
        //                         <TextoDescicao>Descrição: Animal muito dócil, conviveu muito em ambiente trancado.</TextoDescicao>
        //                     </View>
        //                 </View>

        //                 <Button onPress={Contato}>Entrar em Contato</Button>

        //             </Container>
        //         </ScrollView>
        //     </KeyboardAvoidingView>

        //     <BackButton onPress={Voltar}>
        //         <Icon name="arrow-left" size={40} color="#fff" />
        //         <BackButtonText></BackButtonText>
        //     </BackButton>

        // </>
    );
}

export default Inicial;