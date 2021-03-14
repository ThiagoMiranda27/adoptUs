import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SuccessSignUp from '../pages/SuccessSignUp';
import EditProfile from '../pages/EditProfile';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        //propriedas para customizar header das pages
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#312e38'},
        }}
    >
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
        <Auth.Screen name="SuccessSignUp" component={SuccessSignUp} />
        <Auth.Screen name="EditProfile" component={EditProfile} />
    </Auth.Navigator>
);

export default AuthRoutes;