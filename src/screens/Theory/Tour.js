import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../../components/CustomText';
import ImageContainer from '../../components/ImageContainer';
import YouTube from 'react-native-youtube';

const text1 = `   Desa cikakak memiliki wilayah yang cukup luas yang disertai dengan potensi Sumber Daya Manusia dan Sumber Daya Alam yang memadai sehingga terciptalah beberapa wista yang berada pada sekitar Masjid Saka Tunggal. Berikut meupakan objek wisata yang ada pada di Desa Cikakak :`
const text2 = `1.	Masjid Saka Tunggal
   Masjid Saka Tunggal sering dijadikan salah satu objek wisata religi. Selain dari fungsi utamanya yaitu tempat untuk beribadah Masjid Saka Tunggal juga mempunyai potensi lain untuk mengedukasi wisatawan yang datang mengenai pengenalan peninggalan bersejarah. Potensi wisata religi yang lain lagi juga karena adanya makam kiai Toleh sehingga banyak orang yang datang berkunjung untuk berziarah serta menikmati keindahan bangunan klasik Masjid Saka Tunggal.`
const text3 = `2.	Taman Kera
   Pada komplek Masjid Saka tunggal terdapat puluhan ekor kera yang sudah ada sejak puluhan tahun lalu. Dari situlah terciptanya sebuah taman yang dijadikan tempat bagi wisatawan yang ingin sekedar melihat atau memberi maakan kera-kera yang ada.`
const text4 = `3.	Wisata Curug Antap
   Tidak jauh dari Masjid Saka Tunggal Terdapat sebuah tempat wisata yaitu Wisata Curug Antap. Wisata Curug Antap merupakan salah satu wista yang ada di Desa Cikakak. Wisatawan yang berkunjung kesana akan disuguhkan dengan curug (air terjun) yang memukau, tempatnya yang tenang dan alami dikelilingi oleh pohon pinus menjadi daya tarik tersendiri. Tidak hanya itu di Wisata Curug Antap juga terdapat acara pasar tradisional yang rutin diselenggarakan pada setiap hari  Minggu pagi. Pada pasar tradisional tersebut menjual berbagai makam makanan khas dari desa Cikakak seperti oyek, gechok, wajik ketek dan lain sebagainya. Bagi wisatawan yang ingin membeli jajanan tersebut diharuskan untuk terlebih dahulu menukarkan uangnya menjadi sebuah koin yang terbuat dari bambu, setiap koin bernialai Rp. 2.500. Koin itulah yang nantinya digunakan untuk membeli makanan/minuman yang telah disesuaikan dengan jumlah koin tersebut.`
const text5 = `   Selain wistanya yang sering dijadikan tujuan oleh wistawan ternyata wisata-wisata yang ada pada Desa Cikakak tersebut memiliki beberapa produk asli yang hanya ada di Desa Cikakak, yaitu :`
const text6 = `1.	Gechok
   Gechok merupakan makanan khas Desa Cikakak yang kerap diasjiakn pada acara adat maupun hajat tertentu. Bahan utama yang digunakan dalam pembuatan gechok adalah ayan kampung. Ayam yang telah disembelih kemudian dibersikan, kemudian dipanggang diatas bara api, setelah matang kemudian disiram dengan santan kelapa serta dimasukan pula bumbu-bumbu yang telah dibakar juga tadinya. Gechok ini dahulunya merupakan makanan kesukaan kiai Toleh.`
const text7 = `2.	Nasi Penggel
   Sama seperti gechok nasi penggel juga merupakan makanan yang biasanya ada pada acara adat. Nasi penggel biasanya dibagikan kepada orang-orang yang telah menyelesaikan tradisi pengantian jaro (pagar keliling yang ada pada sekitar Masjid Saka Tunggal).`
const text8 = `3.	Wajik Ketek (Ketela Tekong)
   Merupakan makanan olahan yang diproduksi oleh kelompok UMKM tempat produksi oleh-oleh dan souvenir, pemanfaatan yang berasal dari kebun warga. Bahan-bahan yang dibutuhkan untuk pembuatan wajik ketek yaitu ketela tekong, santan kelapa, gula jawa, dan jahe.`
const text9 = `4.	Es badeg
   Dikarenakan masih banyaknya pohon kelapa serta petani nira yang ada di Desa Cikakak maka terciptalah sebuah minuman (badeg) yang berasal dari pohon kelapa serta merupakan bahan utama untuk pembuatan gula jawa.`
const text10 = `5.	Kerajinan Kepala Monyet
   Berasal dari pemanfaatan kelapa yang tidak layak untuk dikonsumsi sehingga tercitalah sebuah kerajinan tangan oleh UMKM kelompok setempat.`
const text11 = `6.	Kerajinan Bunga dari Limbah Plastik
   Untuk menggurangi adanya limbah plastik di Desa Cikakak kelompok UMKM menggubah sampah-sampah tersebut menjadi barang lebih bernilai serta berkesan indah.`
const text12 = `7.	Kerajian Bambu dan Gazebo
   Belimpahnya pohon bambu yang ada di Desa Cikakak sehingga terciptalah ide untuk membuat karajinan yang berbahan dasar dari bambu seperti besek/keranjang bamboo juga gazebo.`
const text13 = `8.	Tirta Brahma
   Merupakan produk beralkohol yang diproduksi secara tradisional (fermentasi) sering digunakan sebagai penganti untuk minyak urut sebab menghasillkan rasa hangat pada tubuh. Tirta brahma dapat dikonsumsi tetapi tidak boleh berlebihan sebab dapat menyebabkan mabuk.`

export default function Tour() {

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
                image={require('../../assets/tour/Tour1.jpg')}
                text={`Gambar Terminal Masjid Saka Tunggal.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour2.jpg')}
                text={`Gambar Gapura Masjid Saka Tunggal.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour3.jpg')}
                text={`Gambar Tampak Depan Masjid Saka Tunggal.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour4.jpg')}
                text={`Gambar Tampak Samping Masjid Saka Tunggal.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour5.jpg')}
                text={`Gambar Penghargaan Dari Mentri Pariwisata dan Ekonomi Kreatif .`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour6.jpg')}
                text={`Gambar Gapura Makam Kiai Toleh.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour7.jpg')}
                text={`Gambar Halaman Makam Kiai Toleh.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour8.jpg')}
                text={`Gambar Dalam Masjid Saka Tunggal.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour9.jpg')}
                text={`Gambar Tempat Wudhu Masjid Saka Tunggal.`}
            />

            <CustomText
                text={text3}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour10.jpg')}
                text={`Gambar Patung Kera.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour11.jpg')}
                text={`Gambar Taman Kera.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour12.jpg')}
                text={`Gambar Taman Kera.`}
            />

            <CustomText
                text={text4}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour13.jpg')}
                text={`Gambar Gapura Wisata Curug Antap.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour14.jpg')}
                text={`Gambar Loket Wisata Curug Antap.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour15.jpg')}
                text={`Gambar Panggung Hiburan Wisata Curug Antap.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour16.jpg')}
                text={`Gambar Pasar Tradisional.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour17.jpg')}
                text={`Gambar Curug Antap.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour18.jpg')}
                text={`Gambar Curug Antap.`}
            />

            <CustomText
                text={text5}
                style={styles.text}
            />
            <CustomText
                text={text6}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour19.jpg')}
                text={`Gambar Gechok.`}
            />
            <CustomText
                text={text7}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour20.jpg')}
                text={`Gambar Nasi Penggel.`}
            />
            <CustomText
                text={text8}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour21.jpg')}
                text={`Gambar Wajik Ketek.`}
            />
            <CustomText
                text={text9}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour22.jpg')}
                text={`Gambar Es Badeg.`}
            />
            <CustomText
                text={text10}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour23.jpg')}
                text={`Gambar Gechok.`}
            />
            <CustomText
                text={text11}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour24.jpg')}
                text={`Gambar Kerajinan Bunga Limbah Plastik.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour25.jpg')}
                text={`Gambar Kerajinan Bunga Limbah Plastik.`}
            />
            <CustomText
                text={text12}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour26.jpg')}
                text={`Gambar Kerajinan Bambu.`}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour27.jpg')}
                text={`Gambar Gazebo.`}
            />
            <CustomText
                text={text13}
                style={styles.text}
            />
            <ImageContainer
                image={require('../../assets/tour/Tour28.jpg')}
                text={`Gambar Tirta Brahma.`}
            />

            <YouTube
                videoId="r00egBZztek"
                style={{ alignSelf: 'stretch', height: 300 }}
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