import * as React from 'react'
import { StyleSheet, View, Dimensions, Image } from 'react-native'
import CustomText from './CustomText';

const width = Dimensions.get('window').width

export default function ImageContainer(props) {
    const { image, text } = props

    return (
        <View>
            <Image
                source={image}
                style={styles.image}
            />
            <CustomText
                text={text}
                style={styles.imageDescription}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width - 32,
        height: 200,
        borderRadius: 8
    },
    imageDescription: {
        fontSize: 14,
        lineHeight: 32,
        marginVertical: 4,
        textAlign: 'center'
    },
})