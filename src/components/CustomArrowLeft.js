import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import { GlobalStyles } from '../styles/GlobalStyles';
import Arrow from '../assets/Arrow.svg';
import Colors from '../utilities/Colors';

export default function CustomArrowLeft(props) {
    const { navigation, onPress = () => navigation.pop(), bottom = false } = props
    return (
        <View style={[bottom ? GlobalStyles.bottomLeft : GlobalStyles.topLeft, { borderRadius: 60 }]}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(Colors.PRIMARY_DARK_COLOR, true)}
                onPress={onPress}>
                <Arrow
                    width={48}
                    height={48}
                />
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({})