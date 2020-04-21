import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as AuthContext } from './../context/authContext';

const Profile = () => {
  const { state: { userDetails } } = useContext(AuthContext);
  console.log(userDetails);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Details</Text>
      <View>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{userDetails.name}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{userDetails.email}</Text>
        <Text style={styles.label}>Date of Joining</Text>
        <Text style={styles.value}>{userDetails.doj}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  header:{
    fontSize: 22,
    alignSelf:'center',
    marginTop: -40,
    marginBottom: 20
  },
  label: {
    fontWeight: 'bold',
    color: '#3273a8'
  },
  value:{
    paddingBottom: 20
  }
});

export default Profile
