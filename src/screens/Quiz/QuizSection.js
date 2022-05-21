import * as React from 'react'
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { GlobalStyles } from '../../styles/GlobalStyles';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';

const width = Dimensions.get('window').width

export default function QuizSection(props) {
    
    const { index, question, answers } = props

    return (
        <ScrollView
            style={{ flex: 1, alignSelf: 'stretch' }}
            contentContainerStyle={{ paddingBottom: 60 }}>
            {
                question.image &&
                <Image
                    source={question.image}
                    style={[styles.image]}
                />
            }
            <CustomText
                text={question.text}
                style={styles.question}
            />
            <View style={GlobalStyles.spaceBetween}>
                <CustomButton
                    text={`A. \n\n${question.a}`}
                    onPress={() => props.onPressAnswer('A')}
                    style={styles.answer}
                    containerStyle={[styles.answerContainer, { marginRight: 8 }]}
                    type={'A' === answers[index] ? 'info' : 'dark'}
                />
                <CustomButton
                    text={`B. \n\n${question.b}`}
                    onPress={() => props.onPressAnswer('B')}
                    style={styles.answer}
                    containerStyle={[styles.answerContainer, { marginLeft: 8 }]}
                    type={'B' === answers[index] ? 'info' : 'dark'}
                />
            </View>
            <View style={[GlobalStyles.spaceBetween, { marginVertical: 20 }]}>
                <CustomButton
                    text={`C. \n\n${question.c}`}
                    onPress={() => props.onPressAnswer('C')}
                    style={styles.answer}
                    containerStyle={[styles.answerContainer, { marginRight: 8 }]}
                    type={'C' === answers[index] ? 'info' : 'dark'}
                />
                <CustomButton
                    text={`D. \n\n${question.d}`}
                    onPress={() => props.onPressAnswer('D')}
                    style={styles.answer}
                    containerStyle={[styles.answerContainer, { marginLeft: 8 }]}
                    type={'D' === answers[index] ? 'info' : 'dark'}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    question: {
        margin: 16,
        marginBottom: 40,
        fontSize: 16,
        lineHeight: 24
    },
    answer: {
        lineHeight: 24,
        textAlignVertical: 'center'
    },
    answerContainer: {
        flex: 1,
        height: 160,
        justifyContent: 'center'
    },
    image: {
        width: width - 32,
        height: 200,
        borderRadius: 8,
        alignSelf: 'center'
    },
})