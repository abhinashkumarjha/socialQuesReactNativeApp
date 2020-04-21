import React, {useState , useContext } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text
} from 'react-native';
import { Context as AuthContext } from "./../context/authContext";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 5
    }
})


const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { error, signIn } = useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text>Enter username</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text>Enter password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button 
            title="Sign in" 
            onPress={() => {
                signIn(username, password)
                navigation.navigate('Home');
            }} 
        />
      </View>
    );
  }
export default SignInScreen