import * as React from 'react';
import { View, StyleSheet, Image, useWindowDimensions, BackHandler, Modal } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import CustomText from '../components/CustomText';
import CustomButton from './../components/CustomButton';
import ExitApp from '../assets/ExitApp.svg'
import Colors from '../utilities/Colors';

function Home({ navigation }) {
    const { width } = useWindowDimensions();

    const [showmodalExitApp, setShowModalExitApp] = React.useState(false)

    React.useEffect(() => {
        const backAction = () => {
            setShowModalExitApp(true)
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <View style={GlobalStyles.container}>
            <CustomText
                text={`SEJARAH\nMASJID SAKA TUNGGAL`}
                style={styles.title}
            />

            <Image
                source={require('../assets/Mosque.png')}
                style={[styles.mosque, { width: width }]}
            />
            <View style={[GlobalStyles.spaceBetween, { margin: 32 }]}>
                <CustomButton
                    text={`Materi`}
                    onPress={() => navigation.navigate('Theory')}
                    containerStyle={{ flex: 1, marginHorizontal: 16 }}
                />
                <CustomButton
                    text={`Quis`}
                    onPress={() => navigation.navigate({ name: 'Quiz', key: 'QUIZ' })}
                    containerStyle={{ flex: 1, marginHorizontal: 16 }}
                />
            </View>
            <CustomButton
                text={`Tentang`}
                onPress={() => navigation.navigate('About')}
                containerStyle={{ marginVertical: 16 }}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={showmodalExitApp}
                onRequestClose={() => {
                    setShowModalExitApp(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ExitApp
                            width={240}
                            height={240}
                        />
                        <View style={[GlobalStyles.spaceBetween]}>
                            <CustomButton
                                text={`Ya`}
                                onPress={() => BackHandler.exitApp()}
                                containerStyle={{ minWidth: 100, marginHorizontal: 16 }}
                            />
                            <CustomButton
                                text={`Tidak`}
                                onPress={() => setShowModalExitApp(false)}
                                containerStyle={{ minWidth: 100, marginHorizontal: 16 }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
    mosque: {
        height: 300,
        resizeMode: 'contain',
        marginVertical: 16,
        marginRight: 8
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000088'
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
        elevation: 5,
        backgroundColor: Colors.PRIMARY_COLOR
    },
})

export default Home;