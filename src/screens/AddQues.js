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
      <Text style={styles.header}>Ask a new Question</Text>
      <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write your question here"
            placeholderTextColor="grey"
            numberOfLines={5}
            multiline={true}
            value={question}
            onChangeText={setQuestion}
          />
      </View>
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
    marginTop: 50,
    paddingHorizontal: 10
  },
  header:{
    fontWeight: 'bold',
    fontSize: 18
  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10
  },
  textArea: {
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  }
});

export default AddQues
