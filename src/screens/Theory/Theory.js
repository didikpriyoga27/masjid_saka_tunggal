import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';
import CustomArrowLeft from '../../components/CustomArrowLeft';
import Colors from '../../utilities/Colors';

function Theory(props) {
    const { navigation } = props
    const [play, setPlay] = React.useState(false)

    const videoRef = React.useRef()

    const _goToDetail = (type, title) => {
        setPlay(false)
        navigation.navigate('TheoryDetail', {
            type, title
        })
    }

    return (
        <View style={GlobalStyles.container}>
            <CustomArrowLeft
                {...props}
            />

            <Image
                source={require('../../assets/Book.png')}
                style={[styles.book]}
            />
            <CustomText
                text={'Materi'}
                style={{ marginBottom: 40 }}
            />
            <View style={GlobalStyles.spaceBetween}>
                <CustomButton
                    text="Sejarah"
                    onPress={() => _goToDetail('History', 'Sejarah')}
                    containerStyle={{ flex: 1 }}
                />
                <CustomButton
                    text="Wisata"
                    onPress={() => _goToDetail('Tour', 'Wisata')}
                    containerStyle={{ flex: 1, marginHorizontal: 16 }}
                />
                <CustomButton
                    text="Adat"
                    onPress={() => _goToDetail('Tradition', 'Adat')}
                    containerStyle={{ flex: 1 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
    book: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginRight: 8
    },
    backgroundVideo: {
        width: 100,
        height: 100,
        backgroundColor: Colors.DANGER_COLOR
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
    },
})

export default Theory;