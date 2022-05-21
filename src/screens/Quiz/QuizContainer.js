import * as React from 'react';
import { View, StyleSheet, BackHandler, Alert, Modal, Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import CustomText from '../../components/CustomText';
import CustomArrowLeft from '../../components/CustomArrowLeft';
import Colors from '../../utilities/Colors';
import QuizSection from './QuizSection';
import CustomArrowRight from '../../components/CustomArrowRight';
import HistoryQuestions from './HistoryQuestions';
import TourQuestions from './TourQuestions';
import TraditionQuestions from './TraditionQuestions';

function QuizContainer(props) {
    const { navigation, route } = props
    const { selectedCategory, name } = route.params
    const [question, setQuestion] = React.useState({})
    const [questions, setQuestions] = React.useState({})
    const [answers, setAnswers] = React.useState([])
    const [index, setIndex] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [modalVisible, setModalVisible] = React.useState(false)
    const [lastUpdateData, setLastUpdateData] = React.useState(new Date())

    React.useEffect(() => {
        if (selectedCategory === 'Sejarah') {
            setQuestion(HistoryQuestions[index])
            setQuestions(HistoryQuestions)
        }
        if (selectedCategory === 'Wisata') {
            setQuestion(TourQuestions[index])
            setQuestions(TourQuestions)
        }
        if (selectedCategory === 'Adat') {
            setQuestion(TraditionQuestions[index])
            setQuestions(TraditionQuestions)
        }
    }, [index])

    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                _backActionHandler()
                return true
            }

            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );

            return () => backHandler.remove();
        }, [index])
    )

    function _backActionHandler() {
        if (index === 0) {
            Alert.alert(
                "Keluar?",
                "Anda yakin ingin keluar dari quis?",
                [
                    {
                        text: "Tidak",
                        style: "cancel"
                    },
                    {
                        text: "Yakin", onPress: () => navigation.pop()
                    }
                ]
            );

        } else {
            _setIndex('minus')
        }
    }

    function _onPressAnswer(answer) {
        var count = 0
        const tempAnswers = answers
        tempAnswers[index] = answer
        tempAnswers.forEach(_ => count++)
        setAnswers(tempAnswers)
        setCount(count)
        setLastUpdateData(new Date())
    }

    function _onNextHandler() {
        if (index < 9) {
            _setIndex('plus')
        } else {
            _countScore()
        }
    }

    function _setIndex(type) {
        if (type == 'plus') {
            setIndex(index + 1)
        } else {
            setIndex(index - 1)
        }
    }

    function _countScore() {
        var score = 0
        const error = []
        questions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) {
                score += 10
            }
            if (answers[index] === undefined) {
                error.push(`Nomor ${index + 1} belum diisi`)
            }
        })
        if (error.length > 0) {
            showMessage({
                message: error[0],
                backgroundColor: Colors.DANGER_COLOR
            });
        } else {
            submitScore(score)
        }
    }

    const submitScore = async (score) => {
        setModalVisible(true)
        try {
            const response = await fetch(
                // `http://192.168.0.5:8080/quiz-mira/score`, {
                `https://projectcoy.com/api/score`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    score: score,
                    type: selectedCategory
                })
            });
            const json = await response.json();
            console.log(json);
            getScores(json.data.id, score)
        } catch (error) {
            console.error(error);
        }
    };

    const getScores = async (id, score) => {
        try {
            const response = await fetch(
                // `http://192.168.0.5:8080/quiz-mira/score?${selectedCategory}`
                `https://projectcoy.com/api/score`
            );
            const json = await response.json();

            navigation.navigate('QuizScore', {
                id,
                score,
                selectedCategory,
                data: json.data.data,
            })
        } catch (error) {
            console.error(error);
        } finally {
            setModalVisible(false)
        }
    }

    return (
        <View style={GlobalStyles.container}>
            <CustomText
                text={`Quis ${selectedCategory}\n\nSoal Nomor ${index + 1}`}
                style={styles.title}
            />
            <QuizSection
                index={index}
                question={question}
                answers={answers}
                onPressAnswer={(answer) => _onPressAnswer(answer)}
                {...props}
            />

            <CustomArrowLeft
                onPress={() => _backActionHandler()}
                bottom
                {...props}
            />
            <CustomArrowRight
                onPress={() => _onNextHandler()}
                {...props}
            />
            <CustomText
                text={count + '/' + 10}
                containerStyle={{ position: 'absolute', bottom: 20 }}
            />
            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tunggu sebentar...</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 16,
    },
    game: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginRight: 8,
    },
    input: {
        textAlign: 'center',
        height: 60,
        margin: 16,
        borderWidth: 1,
        borderColor: Colors.PRIMARY_DARK_COLOR,
        backgroundColor: Colors.PRIMARY_DARK_COLOR,
        borderRadius: 4,
        fontFamily: 'Cutive-Regular',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000066'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        textAlign: "center"
    }
})

export default QuizContainer;