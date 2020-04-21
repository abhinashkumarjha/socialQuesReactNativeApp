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
        marginHorizontal: 10
    },
    input: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      height: 35,
      marginBottom: 15,
      paddingHorizontal: 10
    },
    label:{
      fontWeight: "bold",
      paddingBottom: 5
    },
    logo:{
      justifyContent:"center",
      alignSelf: "center",
      fontSize: 25,
      padding: 20,
      color:'gray'
    },
    error:{
      color: 'red',
      fontWeight: '400',
      paddingTop: 10
    }
})


const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, state } = useContext(AuthContext);
    const { error } = state;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>SoQues</Text>
        <Text style={styles.label}>Enter username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Enter password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button 
            title="Sign in" 
            onPress={() => {
                signIn(username, password)
            }} 
        />
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }
export default SignInScreen