import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../../components/CustomText';
import ImageContainer from '../../components/ImageContainer';

const text1 = `   Masjid Saka Tunggal merupakan salah satu masjid tertua di Indonesia. Masjid Saka Tunggal terletak di Desa Cikakak Kecamatan Wangon Kabupaten Banyumas. Desa Cikakak yaitu salah satu desa dari 12 desa yang berada di Kecamatan Wangon. Desa Cikakak berjarak 25 KM dari pusat kota yaitu Purwokerto. Luas desa Cikakak  sekitar 595.00 Ha, tanahnya yang bergunung sehingga terbagi menjadi 6 gerumbul yaitu Winduraja, Boleran, Baron Cikakak, Planjan dan Gandarusa.`
const text2 = `   Masjid Saka Tunggal didirikan oleh tokoh penyebar agama islam yang bernama kiai Toleh pada tahun 1288 H seperti yang tertulis pada tiang penyangga masjid. Masjid tersebut berdiri pada masa kerajaan Singasari. Salah satu tampilan asli yang tidak pernah berubah masjid itu berdiri yaitu tiang (saka) yang berada pada tengah-tengah masjid. Tiang tersebut (saka) terbuat dari kayu jati yang diukir bermotifkan bunga warna-warni. Kayu yang dijadikan tiang (saka) tersebut berasal dari pohon yang berada pada tempat pertapaan kiai Toleh. Bagian bawah pohon dijadikan bedug, batang pohon dijadikan tiang (saka) tunggal dan cabang- cabang pohon tersebut dijakin sebagai kentong.`
const text3 = `   Pada komplek Masjid Saka Tunggal terdapat keunukan yang jarang ditemui pada masjid-masjid lain yaitu dengan ditemukanya puluhan monyet-monyet yang sudah ada sejak puluhan tahun lalu. Tidak hanya itu di sekitar Masjid Saka Tunggal terdapat rumah-rumah adat khas jaman dahulu yang dijadikan sebagai kediaman bagi para juru kunci Masjid Saka Tunggal. Juru kunci tersebut terbagi menjadi 3 yaitu kunci lebak (bawah), kunci tengah, dan kunci gunung (atas).`

export default function History() {

    return (
        <View style={{ paddingBottom: 60 }}>
            <CustomText
                text={text1}
                style={styles.text}
            />

            <ImageContainer
                image={require('../../assets/history/History1.png')}
                text={`Gambar peta Desa Cikakak.`}
            />

            <ImageContainer
                image={require('../../assets/history/History2.jpg')}
                text={`Gambar gang Masjid Saka Tunggal dari jalan raya.`}
            />

            <CustomText
                text={text2}
                style={styles.text}
            />

            <ImageContainer
                image={require('../../assets/history/History3.jpg')}
                text={`Gambar Masjid Saka Tunggal.`}
            />

            <ImageContainer
                image={require('../../assets/history/History4.jpg')}
                text={`Gambar Tiang Saka Tunggal.`}
            />

            <ImageContainer
                image={require('../../assets/history/History5.jpg')}
                text={`Gambar Bedug dan Kentong.`}
            />

            <CustomText
                text={text3}
                style={styles.text}
            />

            <ImageContainer
                image={require('../../assets/history/History6.jpg')}
                text={`Gambar Monyet di Komplek Masjid.`}
            />
            
            <ImageContainer
                image={require('../../assets/history/History7.jpg')}
                text={`Gambar Rumah Adat Kunci Lebak.`}
            />
            
            <ImageContainer
                image={require('../../assets/history/History8.jpg')}
                text={`Gambar Rumah Adat Kunci Tengah.`}
            />

            <ImageContainer
                image={require('../../assets/history/History9.jpg')}
                text={`Gambar Rumah Adat Kunci Gunung.`}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        lineHeight: 32,
        marginVertical: 16,
        textAlign: 'justify'
    },
})