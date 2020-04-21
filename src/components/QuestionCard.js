import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    cardStyle :{
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
      },
      authorStyle: {
          fontStyle: 'italic'
      },
      innerContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      details: {
          color: 'blue'
      }
});

const QuestionCard = ({question, navigation}) => {
  const [ cardLayout, setCardLayout ] = useState('small');

  return(
        <TouchableOpacity onPress={()=>navigation.navigate('QuestionDetails', { question })}>
            <View style={styles.cardStyle}> 
                <Text style={styles.questionStyle}>{question.ques}</Text>
                <View style={styles.innerContainerStyle}>
                    <Text style={styles.authorStyle}>
                        {question.askedBy}
                    </Text>
                    <TouchableOpacity 
                        onPress={()=>{
                            cardLayout === 'small' ? setCardLayout('big'):setCardLayout('small')
                        }}
                    >
                        <Text style={styles.details}>
                            {cardLayout === 'small' ?'see details':'hide details'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default QuestionCard