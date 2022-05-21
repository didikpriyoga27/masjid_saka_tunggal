import * as React from 'react';
import { View, StyleSheet, BackHandler, ScrollView, TouchableNativeFeedback } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import CustomText from '../../components/CustomText';
import Colors from '../../utilities/Colors';
import Retry from '../../assets/Retry.svg';
import Home from '../../assets/Home.svg';

function QuizScore(props) {
    const { navigation, route } = props
    const { score, selectedCategory, data } = route.params

    const [tableHead] = React.useState(['No.', 'Nama', 'Skor'])
    const [tableTitle, setTableTitle] = React.useState([])
    const [tableData, setTableData] = React.useState([])

    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                navigation.popToTop()
                return true
            }

            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );

            return () => backHandler.remove();
        }, [])
    )

    React.useEffect(() => {
        const tableTitle = []
        const tableData = []
        var filteredData = []

        data.forEach((i) => {
            if (i.type === selectedCategory) {
                filteredData.push(i)
            }
        })
        filteredData = filteredData.sort((a, b) => {
            if (parseInt(a.score) > parseInt(b.score)) return -1;
            if (parseInt(a.score) < parseInt(b.score)) return 1;
            return 0;
        });
        filteredData.forEach((i, index) => {
            tableTitle.push((index + 1).toString())
            tableData.push([i.name, i.score])
            setTableTitle(tableTitle)
            setTableData(tableData)
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            <CustomText
                text={`${score}`}
                style={styles.scoreNumber}
            />
            <CustomText
                text={`Skor Anda`}
                style={styles.scoreText}
            />
            <CustomText
                text={`Skor Tertinggi`}
                style={styles.highScoreText}
            />
            <View style={{ padding: 16 }}>
                <Table borderStyle={{ borderWidth: 2 }}>
                    <Row data={tableHead} flexArr={[0.98, 3, 2]} style={styles.head} textStyle={styles.text} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                        <Rows data={tableData} flexArr={[3, 2]} style={styles.row} textStyle={styles.text} />
                    </TableWrapper>
                </Table>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 16 }}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(Colors.PRIMARY_DARK_COLOR, true)}
                    onPress={() => { navigation.navigate({ key: 'QUIZ' }) }}>
                    <Retry
                        width={48}
                        height={48}
                    />
                </TouchableNativeFeedback>
                <View style={{ width: 16 }} />
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(Colors.PRIMARY_DARK_COLOR, true)}
                    onPress={() => { navigation.popToTop() }}>
                    <Home
                        width={48}
                        height={48}
                    />
                </TouchableNativeFeedback>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARY_COLOR,
        flex: 1
    },
    scoreNumber: {
        textAlign: 'center',
        fontSize: 60
    },
    scoreText: {
        textAlign: 'center',
    },
    highScoreText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 14
    },
    head: {
        height: 40,
        backgroundColor: Colors.PRIMARY_DARK_COLOR
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_COLOR
    },
    row: {
        height: 28
    },
    text: {
        color: Colors.BLACK_COLOR,
        textAlign: 'center',
        fontFamily: 'Cutive-Regular',
        fontSize: 12
    }
})

export default QuizScore;