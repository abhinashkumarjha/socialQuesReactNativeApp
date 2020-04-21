import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button 
} from 'react-native';
import { Context as QuesContext } from './../context/questionsContext';

const AddQues = ({ navigation }) => {
  const [ question, setQuestion ] = useState('')
  const { addQuestion } = useContext(QuesContext);
  return (
    <View style={styles.container}>
      <Text>Ask a new Question</Text>
      <TextInput 
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
      />
      <Button 
        title={'Add Question'}
        onPress = {()=>{
            addQuestion(question, 'Abhinash', ()=>{
              navigation.navigate('Home');
          })
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
});

export default AddQues
