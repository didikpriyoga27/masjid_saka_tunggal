import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CustomText from '../../components/CustomText';
import CustomArrowLeft from '../../components/CustomArrowLeft';
import History from './History';
import Tour from './Tour';
import Tradition from './Tradition';

function TheoryDetail(props) {
    const { title } = props.route.params

    return (
        <View style={GlobalStyles.container}>
            <ScrollView style={{ padding: 16 }}>
                <CustomText
                    text={title}
                    style={styles.title}
                />
                {title == 'Sejarah' &&
                    <History />
                }
                {title == 'Wisata' &&
                    <Tour />
                }
                {title == 'Adat' &&
                    <Tradition />
                }
            </ScrollView>
            <CustomArrowLeft
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 60,
    },
    mosque: {
        height: 100,
        width: 300,
        resizeMode: 'contain',
        marginBottom: 40,
        borderRadius: 16
    }
})

export default TheoryDetail;