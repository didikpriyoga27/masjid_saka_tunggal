import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../../components/CustomText';
import ImageContainer from '../../components/ImageContainer';

const text1 = `   Pada Desa Cikakak terdapat beberapa adat yang dilakukan pada saat atau hari-hari tertentu, adat tersebut merupakan salah satu daya tarik yang memicu wisatawan untuk berkunjung ke Desa Cikakak. Adat-adat tersebut yaitu :`
const text2 = `1.	Jaro Rojab
   Bagi umat islam bulan Rajab dalam penanggalan Hijeriyah memiliki makna penting dan istimewa. Hal itu pula yang tertanan pada warga Desa Cikakak. Mereka terus melestarikan yang diajarkan dari generasi ke generasi hingga sekarang yang deikenal sebagai Jaro Rojab. Jaro sendiri berasal dar kata “Penjaroan” yang diartikan sebagai ziarah. Tradisi Jaro  Rojab sendiri berupa penggantian pagar bambu pada komplek Masjid Saka Tunggal dan makam Kiai Toleh. Penggantian Jaro tersebut selalu rutin dilaksanakan oleh warga pada tanggal 26 Rajab penaggalan jawa. Penutupan tradisi Jaro Rojab yaitu dengan diadakanya tasyakuran yang dikuti oleh semua warga yang telah mengikuti tradisi tersebut, tidak lupa dibagikanya nasi penggel untuk dibawa pulang.`
const text3 = `2.	Sedekah Bumi
   Salah satu adat yang runtin dilaksanakan di Desa Cikakak yaitu sedekah bumi. Sedekah bumi rutin diadakan pada bulan Apit (kalender jawa) yang biasanya dilaksanakan pada hari Selasa Kliwon atau Jumat Kliwon. Adat tersebut merupakan wujud syukur kepada tuhan yang maha esa atas karunia dan rizki yang melimpah melalui tanah bumi. Acara sedekah bumi diawali dengan kegiatan bersih-bersih desa dan makam yang ada di Desa Cikakak, kemudian dilanjutkan dengan tasyakuran atau slametan. Setiap warga yang mengikuti slametan membawa tenong (tempat menyimpan makanan dari bambu) yang berisikan nasi serta lauk pauk. Acara tersebut dipimpin doa oleh tokoh adat setempat.`
const text4 = `3.	Muludan
   Muludan adalah tradisi yang dilakukan masyarakat Desa Cikakak untuk memperingati Mulid Nabi Muhammad SAW diksanakan pada Majid Saka Tunggal yang diiringi dengan trebangan (genjring). Acara diisi dengan sholawatan jawa pagi sampai sore hari, di tengah acara pada waktu dzuhur diisi dengan slametan berupa jajanan pasar dan air yang diambil dari mata air sungai kranji. Air tersebut dipercaya oleh masyarakat sekitar sebagai air yang bermanfaat secara spiritual karena sudah di sholawati dan didoa’i oleh tokoh adat setempat.`
const text5 = `4.	Festival Rewanda Bojana
   Rewanda Bojana merupakan adat/tradisi memberi makan kera yang ada di komplek Masjid Saka Tunggal. Menurut legenda kera-kera tersebut merupakan santri-santri nakal Kiai Toleh yang dikutuk. Terlepas dari benar atau tidaknya legenda tersebut kera-kera tersebut merupakan bagian dari kehidupan masyarakat Deasa Cikakak dari waktu ke waktu. Festival tersebut dilaksanakan pada musim kemarau saat sumber makanan sudah mulai minim yang diikuti ratusan orang dari seluruh desa yang ada di Kecamatan Wangon. Acara ini juga sudah dikelola oleh pemerintah Kabupaten sebagai acara tahunan yang rutin diadakan.`

export default function Tradition() {

    return (
        <View style={{ paddingBottom: 60 }}>
            <CustomText
                text={text1}
                style={styles.text}
            />
            <CustomText
                text={text2}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition1.jpg')}
                text={`Gambar Proses Pemotongan Bambu .`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition2.jpg')}
                text={`Gambar Proses Pemotongan Bambu .`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition3.jpg')}
                text={`Gambar Proses Pengantian Jaro Rojab.`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition4.jpg')}
                text={`Gambar Proses Pengantian Jaro Rojab.`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition5.jpg')}
                text={`Gambar Tasyakuran Setelah Pengantian Jaro.`}
            />

            <CustomText
                text={text3}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition6.jpg')}
                text={`Gambar Sedekah Bumi.`}
            />
            
            <CustomText
                text={text4}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition7.jpg')}
                text={`Gambar Penabuh Trebangan.`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition8.jpg')}
                text={`Gambar Tasyakuran Malud Nabi.`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition9.jpg')}
                text={`Gambar Trebangan (Genjring).`}
            />

            <CustomText
                text={text5}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition10.jpg')}
                text={`Gambar Mentri Kemenparekraf Mengikuti Festival Rewanda Bojana.`}
            />
            <ImageContainer
                image={require('../../assets/tradition/Tradition11.png')}
                text={`Gambar Proses Festival Rewanda Bojana.`}
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