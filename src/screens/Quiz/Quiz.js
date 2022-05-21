import * as React from 'react';
import { View, Image, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { showMessage } from "react-native-flash-message";
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import CustomArrowLeft from '../../components/CustomArrowLeft';
import Colors from '../../utilities/Colors';

function Quiz(props) {
    const { navigation } = props
    const { width } = useWindowDimensions()

    const [selectedCategory, setSelectedCategory] = React.useState('')
    const [startQuiz, setStartQuis] = React.useState(false)
    const [name, onChangeName] = React.useState('')

    return (
        <View style={GlobalStyles.container}>
            <CustomArrowLeft
                {...props}
            />

            <Image
                source={require('../../assets/Game.png')}
                style={[styles.game]}
            />
            <CustomText
                text={`Quis ${selectedCategory}`}
                style={{ marginBottom: 40 }}
            />
            {!startQuiz &&
                <View style={GlobalStyles.spaceBetween}>
                    <CustomButton
                        text={`Sejarah`}
                        onPress={() => {
                            setSelectedCategory('Sejarah')
                            setStartQuis(true)
                        }}
                        containerStyle={{ flex: 1 }}
                    />
                    <CustomButton
                        text={`Wisata`}
                        onPress={() => {
                            setSelectedCategory('Wisata')
                            setStartQuis(true)
                        }}
                        containerStyle={{ flex: 1, marginHorizontal: 16 }}
                    />
                    <CustomButton
                        text={`Adat`}
                        onPress={() => {
                            setSelectedCategory('Adat')
                            setStartQuis(true)
                        }}
                        containerStyle={{ flex: 1 }}
                    />
                </View>
            }
            {startQuiz &&
                <View>
                    <CustomText
                        text={'Untuk memulai quis ini'}
                        style={{ textAlign: 'center' }}
                    />
                    <TextInput
                        style={[styles.input, {
                            width: width - 40
                        }]}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder={`Masukkan nama kalian`}
                        selectionColor={Colors.PRIMARY_COLOR}
                    />
                    <View style={GlobalStyles.spaceBetween}>
                        <CustomButton
                            text={`Batal`}
                            type={`danger`}
                            containerStyle={{ width: 120, alignSelf: 'center' }}
                            onPress={() => {
                                setSelectedCategory('')
                                setStartQuis(false)
                                onChangeName('')
                            }}
                        />
                        <CustomButton
                            text={`Mulai`}
                            type={`success`}
                            containerStyle={{ width: 120, alignSelf: 'center' }}
                            onPress={() => {
                                if (name == '') {
                                    showMessage({
                                        message: "Silahkan masukkan nama terlebih dahulu",
                                        backgroundColor: Colors.DANGER_COLOR
                                    });
                                } else {
                                    navigation.navigate('QuizContainer', {
                                        name: name,
                                        selectedCategory: selectedCategory
                                    })
                                    onChangeName('')
                                }
                            }}
                        />
                    </View>
                </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
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
})

export default Quiz;