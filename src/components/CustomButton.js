import * as React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import Colors from '../utilities/Colors';

export default function CustomButton(props) {
    const {
        text,
        style,
        containerStyle,
        onPress,
        type = 'dark',
    } = props;

    var backgroundColor = Colors.PRIMARY_DARK_COLOR
    var textColor = Colors.BLACK_COLOR
    if (type === 'primary') {
        backgroundColor = Colors.PRIMARY_COLOR
        textColor = Colors.WHITE_COLOR
    }
    if (type === 'warning') {
        backgroundColor = Colors.WARNING_COLOR
        textColor = Colors.BLACK_COLOR
    }
    if (type === 'success') {
        backgroundColor = Colors.SUCCESS_COLOR
        textColor = Colors.WHITE_COLOR
    }
    if (type === 'danger') {
        backgroundColor = Colors.DANGER_COLOR
        textColor = Colors.WHITE_COLOR
    }
    if (type === 'info') {
        backgroundColor = Colors.INFO_COLOR
        textColor = Colors.BLACK_COLOR
    }

    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={[styles.containerStyle, containerStyle, { backgroundColor: backgroundColor }]}>
                <Text style={[styles.text, style, { color: textColor }]}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Cutive-Regular',
        fontSize: 16,
        textAlign:'center'
    },
    containerStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4
    }
})