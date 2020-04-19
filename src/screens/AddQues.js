import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddQues = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to add a new AddQues</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddQues
