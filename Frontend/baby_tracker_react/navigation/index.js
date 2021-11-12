import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from '../screens/welcome';
import SignInScreen from '../screens/signin';
import options from '../screens/options'
import { MainNav } from './MainNav';
const stack = createNativeStackNavigator();
const Navstack = () => {
    return (
       
            <stack.Navigator  initialRouteName={welcome} >

                <stack.Screen
                name = "welcome" component={welcome} options={{headerShown: false}}
                />
                <stack.Screen
                name="options" component={options} options={{headerShown: false}}
                />
                <stack.Screen
                name = "login"
                component={SignInScreen}
                options={{title: 'login'}}
                />
                <stack.Screen name = "signedin" component={MainNav} options={{headerShown: false}}/>
            </stack.Navigator>
        
    );
    
};

export default Navstack;