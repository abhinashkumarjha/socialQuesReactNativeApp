import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import AddQues from './src/screens/AddQues';
import QuesDetails from './src/screens/QuesDetails';
import Profile from './src/screens/Profile';
import { Provider as QuesProvider } from './src/context/questionsContext';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/authContext';
import {Ionicons, Entypo } from '@expo/vector-icons';
import SignInScreen from './src/screens/SignIn';

const Tab = createBottomTabNavigator();
const HomeTabStack = () => {
  return(
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Ionicons name={'ios-home'} size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <Entypo name={'user'} size={size} color={color} />;
            }
            return <Ionicons name={'md-add'} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3273a8',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddQuestion" component={AddQues} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  )
}

const LogInNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen 
        options={{ title: 'Login' }} 
        name="SignIn" 
        component={SignInScreen}
      />
    </Stack.Navigator>
  )
}

const AuthenticatedNavigator = () =>{
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        options={{headerShown: false}} 
        component={HomeTabStack} 
      />
      <Stack.Screen 
        options={{ title: 'Question Details' }} 
        name="QuestionDetails" 
        component={QuesDetails}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const HomeStack = createStackNavigator();
  let { state } = React.useContext(AuthContext);
  return(
    <NavigationContainer>
      {state.userToken===null ? (<LogInNavigator />):(<AuthenticatedNavigator />)}
    </NavigationContainer>
  )
}

export default ()=><AuthProvider><QuesProvider><App /></QuesProvider></AuthProvider>
