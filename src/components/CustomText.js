import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../utilities/Colors';

export default function CustomText(props) {
    const {
        text,
        style,
        containerStyle
    } = props;
    return (
        <View style={containerStyle}>
            <Text style={[styles.text, style]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.BLACK_COLOR,
        fontFamily: 'Cutive-Regular',
        fontSize: 20,
    },
})