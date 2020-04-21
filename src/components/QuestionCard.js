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
          color: '#3273a8',
          fontWeight: 'bold'
      }
});

const QuestionCard = ({question, navigation}) => {
  const [ cardLayout, setCardLayout ] = useState('small');
  let tempQues = question.ques;
  let tempAns ='';
  let tempAuthor = '';
  if(tempQues.length > 200 && cardLayout==='small'){
    tempQues = `${tempQues.substr(0, 200)}....`;
  }
  if(question.ans.length > 0){
    if(cardLayout==='small' && (question['ans'][0]['text']).length > 200){     
        tempAns = `${(question['ans'][0]['text']).substr(0, 200)}....`
    } else {
        tempAns = question['ans'][0]['text']
    }
    tempAuthor = question['ans'][0]['by']
  }
  return(
        <View style={styles.cardStyle}> 
            <Text style={styles.questionStyle}>{tempQues}</Text>
            <View style={styles.innerContainerStyle}>
                <Text style={styles.authorStyle}>
                    {`Question by ${question.askedBy}`}
                </Text>
                <Text>{`${question.ans.length} Answers`}</Text>
            </View>
            <Text style={styles.answer}>{tempAuthor.length > 0 ? `${tempAuthor} answered as :`: ''}</Text>
            <Text style={styles.answer}>
                {tempAns}
            </Text>
            <View style={styles.innerContainerStyle}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('QuestionDetails', { question })}
                >
                    <Text style={styles.details}>{'Write an answer'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{
                        cardLayout === 'small' ? setCardLayout('big'):setCardLayout('small')
                    }}
                >
                    <Text style={styles.details}>
                        {cardLayout === 'small' ?'See full details':'hide details'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuestionCard