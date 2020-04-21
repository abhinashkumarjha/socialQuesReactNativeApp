import React, { useContext } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Context as QuesContext } from './../context/questionsContext';


const Home = ({ navigation }) => {
  const { state } = useContext(QuesContext);
  return (
    <View style={styles.container}>
      <FlatList 
        data={state}
        keyExtractor = {(item)=>item.id}
        renderItem= {({item})=>{
          return (
              <TouchableOpacity onPress={()=>navigation.navigate('QuestionDetails', { id: item.id })}>
                  <View style={styles.rowStyle}> 
                      <Text style={styles.questionStyle}>{item.ques}</Text>
                      <Text>{item.askedBy}</Text>
                  </View>
              </TouchableOpacity>
          )
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  },
  rowStyle :{
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5
  },
  questionStyle:{
    fontSize: 24,
  }
});

export default Home
