import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, TextInput, Image, Dimensions, } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window')


const Home = (props) => {
   return (
      <View style={styles.container}>
         <ImageBackground style={styles.image} source={require('../../assets/hero.png')}>
            <View style={styles.heroContent}>
               <Text style={styles.heroTextContent}>LakuDotKom</Text>
               <Text style={styles.subTitle}>Enjoy inspiring with LakuDotKom</Text>
            </View>
         </ImageBackground>
         <View style={styles.content}>
            <View style={styles.containerInput}>
               <Icon name='search' size={20} color={'#cdcdcd'} />
               <TextInput style={styles.inputSearch} placeholder="Pakaian, Aksesoris dll.." />
            </View>
            <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
               <Text style={styles.textKategori}>Kategori</Text>
               <ScrollView horizontal={true} style={styles.carousel} showsHorizontalScrollIndicator={false}>
                  <Image source={require('../../assets/fetured/2.jpg')} style={[styles.imageCarousel, styles.imageCarouselStart]} />
                  <Image source={require('../../assets/fetured/7.jpg')} style={styles.imageCarousel} />
                  <Image source={require('../../assets/fetured/1.jpg')} style={styles.imageCarousel} />
                  <Image source={require('../../assets/fetured/4.jpg')} style={styles.imageCarousel} />
                  <Image source={require('../../assets/fetured/5.jpg')} style={[styles.imageCarousel, styles.imageCarouselEnd]} />
               </ScrollView>
               <Text style={styles.textPopuler}>Populer</Text>
               <View style={styles.contentWrapper}>
                  <View style={styles.content1}>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/6.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/7.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                  </View>
                  <View style={styles.content2}>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/8.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/9.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                  </View>
                  <View style={styles.content3}>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/2.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/1.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                  </View>
                  <View style={styles.content4}>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/4.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                     <View style={styles.card}>
                        <View style={styles.thumb}>
                           <Image source={require('../../assets/fetured/5.jpg')} style={styles.imageThumb} />
                        </View>
                        <View style={styles.headerCard}>
                           <Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold', color: '#3c1c70' }}>Blues</Text>
                           <FontAwesome5 name='heart' size={20} color='salmon' />
                        </View>
                        <View style={styles.star}>
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                           <FontAwesome5 name='star' size={13} color='#b8cc00' />
                        </View>
                        <View style={styles.footerCard}>
                           <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', color: 'salmon' }}>Rp. 250.000</Text>
                           <Text style={{ fontSize: 14, fontFamily: 'Roboto-Light', color: '#cdcdcd' }}>150 Terjual</Text>
                        </View>
                     </View>
                  </View>
               </View>

            </ScrollView>
         </View>
      </View>

   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f7f5fe',
   },
   image: {
      width,
      height: 350
   },
   heroContent: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24
   },
   heroTextContent: {
      marginTop: -120,
      fontSize: 40,
      color: '#fff',
      fontFamily: 'Roboto-Bold'
   },
   subTitle: {
      fontSize: 16,
      color: '#fff',
      fontFamily: 'Roboto-Medium'
   },
   containerInput: {
      marginTop: -20,
      marginBottom: 10,
      marginHorizontal: 24,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 30,
      paddingHorizontal: 20,
      alignItems: 'center',
      shadowColor: '#ab04ff',
      shadowOffset: {
         width: 0,
         height: 10,
      },
      shadowOpacity: 1,
      shadowRadius: 3,
      // elevation: 6,
   },
   inputSearch: {
      marginLeft: 5,
      color: '#777'
   },
   content: {
      backgroundColor: '#f5f5f5',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      marginTop: -140,
      flex: 2
   },
   wrapper: {
      marginTop: 10,
   },
   textKategori: {
      fontSize: 18,
      fontFamily: 'Montserrat-Medium',
      color: '#3c1c70',
      marginLeft: 24
   },
   imageCarousel: {
      margin: 10,
      borderRadius: 10
   },
   imageCarouselStart: {
      marginLeft: 22
   },
   imageCarouselEnd: {
      marginRight: 22
   },
   textPopuler: {
      fontSize: 18,
      fontFamily: 'Montserrat-Medium',
      color: '#3c1c70',
      marginLeft: 24,
      marginTop: 20,
      marginBottom: 10
   },
   contentWrapper: {
      width,
      marginBottom: 90,
   },
   content1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginVertical: 6
   },
   content2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginVertical: 6
   },
   content3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginVertical: 6
   },
   content4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginVertical: 6
   },
   card: {
      borderWidth: .5,
      borderColor: '#cdcdcd',
      borderRadius: 5,
      overflow: 'hidden'
   },
   thumb: {
      width: 165,
      overflow: 'hidden',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
   },
   headerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10
   },
   star: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 90,
      marginLeft: 10,
      marginBottom: 10
   },
   footerCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginBottom: 10
   }

})
