import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

const QuesDetails = ({ route }) => {
  const { question } = route.params;
  //console.log(questionDetail)
  return (
    <View style={styles.container}>
      <Text>{question.ques}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
});

export default QuesDetails
