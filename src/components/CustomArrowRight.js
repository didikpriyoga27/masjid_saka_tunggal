import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import { GlobalStyles } from '../styles/GlobalStyles';
import Arrow from '../assets/Arrow.svg';
import Colors from '../utilities/Colors';

export default function CustomArrowRight(props) {
    const { navigation, onPress = () => navigation.pop() } = props
    return (
        <View style={[GlobalStyles.bottomRight, { borderRadius: 60 }]}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(Colors.PRIMARY_DARK_COLOR, true)}
                onPress={onPress}>
                <Arrow
                    width={48}
                    height={48}
                    style={{
                        transform: [
                            { scaleX: -1 },
                        ]
                    }}
                />
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({})