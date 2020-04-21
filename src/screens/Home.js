import React, { useContext } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList
} from 'react-native';
import { Context as QuesContext } from './../context/questionsContext';

import QuestionCard from './../components/QuestionCard';


const Home = ({ navigation }) => {
  const { state } = useContext(QuesContext);
  return (
    <View style={styles.container}>
      <FlatList 
        data={state}
        keyExtractor = {(item)=>item.id}
        renderItem= {({item})=>{
          return <QuestionCard question={item} navigation={navigation}/>
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  }
});

export default Home
