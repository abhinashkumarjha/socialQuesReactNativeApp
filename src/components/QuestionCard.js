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
        borderColor: 'gray',
        marginBottom: 15,
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5
      },
      questionStyle:{
        fontSize: 16,
        fontWeight: 'bold'
      },
      authorStyle: {
          fontStyle: 'italic'
      },
      innerContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      details: {
          color: '#3273a8'
      }
});

const QuestionCard = ({question, navigation}) => {
  const [ cardLayout, setCardLayout ] = useState('small');

  return(
        <View style={styles.cardStyle}> 
            <Text style={styles.questionStyle}>{question.ques}</Text>
            <View style={styles.innerContainerStyle}>
                <Text style={styles.authorStyle}>
                    {`by ${question.askedBy}`}
                </Text>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('QuestionDetails', { question })}
                >
                    <Text style={styles.details}>{'write an answer'}</Text>
                </TouchableOpacity>
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
    )
}

export default QuestionCard