import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SuccessSignUp from '../pages/SuccessSignUp';
import EditProfile from '../pages/EditProfile';
import AddPet from '../pages/AddPet';
import SuccessAdoption from '../pages/SuccessAdoption';
import Tab from './tab';

const { Navigator, Screen } = createStackNavigator();

function stack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="SuccessSignUp" component={SuccessSignUp} />
            <Screen name="Init" component={Tab} />
            <Screen name="EditProfile" component={EditProfile} />
            <Screen name="AddPet" component={AddPet} />
            <Screen name="SuccessAdoption" component={SuccessAdoption} />
        </Navigator>
    );
  }

export default stack; 