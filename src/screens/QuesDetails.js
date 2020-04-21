import React, { useState, useContext } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Button,
  ScrollView,
  FlatList 
} from 'react-native';
import { Context as QuesContext } from './../context/questionsContext';
import { Entypo } from '@expo/vector-icons'

const QuesDetails = ({ route }) => {
  const { question } = route.params;
  const [ ans, setAns ] = useState('');
  const { addAnswer } = useContext(QuesContext);

  return (
      <ScrollView  style={styles.container}>
        <Text style={styles.question}>{question.ques}</Text>
        <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write your answer"
            placeholderTextColor="grey"
            numberOfLines={5}
            multiline={true}
            value={ans}
            onChangeText={setAns}
          />
        </View>
        <Button
          style={styles.submitAnswer}
          title={'Submit answer'}
          onPress={()=>{
            addAnswer(question.id, ans, 'Abhinash')
          }}
        />
        <View style={styles.answerContainer}>
          <Text style={styles.answerLabel}>Answers submitted </Text>
          <FlatList
            style={styles.answerList} 
            data={question.ans}
            renderItem={({item})=>{
              return (
                <View>
                  <View style={styles.answerHeader}>
                    <Entypo name="user" size={35}/>
                    <View style={styles.answerHeaderTextContainer}>
                      <Text style={styles.answerHeaderName}>{item.by}</Text>
                      <Text style={styles.answerHeaderlabel}>{'Answered as'}</Text>
                    </View>
                  </View>
                  <Text style={styles.answerStyle}>
                    {item.text}
                  </Text>
                </View>
              )}
            }
            keyExtractor={(item)=>(Math.floor(Math.random()*1000000)).toString()}
          />
        </View>
      </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginHorizontal: 5,
    paddingBottom: 5,
    backgroundColor: 'white'
  },
  question:{
    fontSize: 16,
    fontWeight: 'bold'
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
  },
  submitAnswer:{
    fontWeight: 'bold'
  },
  answerContainer: {
    marginTop: 10,
    marginBottom: 50
  },
  answerLabel:{
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15
  },
  answerStyle:{
    fontSize: 16,
    marginVertical: 5
  },
  answerHeader: {
    flexDirection: 'row',
    alignItems: "center"
  },
  answerHeaderName:{
    fontWeight:'bold'
  },
  answerHeaderTextContainer: {
    paddingLeft: 15
  },
  answerHeaderlabel:{
    fontStyle: 'italic',
    fontWeight: '400'
  }
});

export default QuesDetails
