import { StyleSheet } from 'react-native'
import Colors from '../utilities/Colors'

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY_COLOR
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row',
    },
    topLeft: {
        position: 'absolute',
        top: 16,
        left: 16
    },
    bottomLeft: {
        position: 'absolute',
        bottom: 16,
        left: 16
    },
    bottomRight: {
        position: 'absolute',
        bottom: 16,
        right: 16
    },
})