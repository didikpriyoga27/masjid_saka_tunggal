import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import Colors from '../utilities/Colors';
import CustomArrowLeft from '../components/CustomArrowLeft';

function About(props) {

    const nama = `:  Mira Sayekthi`
    const NIM = `:  17102062`
    const prodi = `:  S1 Teknik Informatika`
    const email = `:  17102062@ittelkom-pwt.ac.id`
    const pembimbing1 = `:  1. M. Azrino Gustalika, S.Kom., M. Tr. T`
    const pembimbing2 = `   2. Shintis Dwi Alika, M.pd`

    return (
        <View style={GlobalStyles.container}>
            <CustomArrowLeft 
                {...props}
            />
            <CustomText
                text={'Tentang Pembuat'}
            />
            <View style={styles.container}>
                <Image
                    source={require('../assets/Profile.png')}
                    style={{
                        width: 160,
                        height: 160,
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        marginBottom: 16
                    }}
                />
                <View style={GlobalStyles.row}>
                    <View style={{ flex: 1 }}>
                        <CustomText
                            text={'Nama'}
                            style={styles.text}
                        />
                        <CustomText
                            text={'NIM'}
                            style={styles.text}
                        />
                        <CustomText
                            text={'Prodi'}
                            style={styles.text}
                        />
                        <CustomText
                            text={'Email'}
                            style={styles.text}
                        />
                        <CustomText
                            text={'Pembimbing'}
                            style={styles.text}
                        />
                    </View>
                    <View style={{ flex: 2 }}>
                        <CustomText
                            text={nama}
                            style={styles.text}
                        />
                        <CustomText
                            text={NIM}
                            style={styles.text}
                        />
                        <CustomText
                            text={prodi}
                            style={styles.text}
                        />
                        <CustomText
                            text={email}
                            style={styles.text}
                        />
                        <CustomText
                            text={pembimbing1}
                            style={styles.text}
                        />
                        <CustomText
                            text={pembimbing2}
                            style={styles.text}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 8,
        borderRadius: 16,
        borderColor: Colors.BROWN_COLOR,
        alignSelf: 'stretch',
        padding: 16,
        margin: 16,
    },
    text: {
        fontSize: 10,
        lineHeight: 24
    }
})

export default About;