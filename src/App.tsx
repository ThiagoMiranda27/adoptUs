import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/stack';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor='#854695' />
        <View style={{flex: 1, backgroundColor: '#854695'}}>
            <Routes />
        </View>
    </NavigationContainer>
);

export default App;