import { StyleSheet, Text, View,TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Link, Tabs } from 'expo-router';
const index = () => {
  return (
    <ScrollView >
       <View style={styles.boxLoc}>
       <Text style={styles.textLoc}>Current Location</Text>
       <View style ={{flexDirection: "row"}}>
       <Text style={styles.textLoc1}>Sungai Buloh, Selangor</Text>
       <MaterialIcons name="keyboard-arrow-down" size={24} style={styles.arrowDown} color="white" />
       <View style={styles.boxORG}>
       <AntDesign name="shoppingcart" size={24} color="white" style={styles.cart} />
       <Text style={styles.textCart}>0</Text>
       </View>
       </View>
       <TextInput  placeholder='Search Item'  style={styles.TextInput}/>
       </View>
       <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.boxCat}>
          <Image style={styles.imgCat}
               source={require("../../assets/images/burger.png")} />
          <Text style={styles.textCat}>Burger</Text>
          </View>
          <View style={styles.boxCat}>
          <Image style={styles.imgCat}
               source={require("../../assets/images/cupcake.png")} />
          <Text style={styles.textCat}>Cake</Text>
          </View>
          <View style={styles.boxCat}>
          <Image style={styles.imgCat}
               source={require("../../assets/images/ramen.png")} />
          <Text style={styles.textCat}>Noodle</Text>
          </View>
     </ScrollView>
     <Image style={styles.banner}
               source={require("../../assets/images/banner.webp")} />
    <View style ={{flexDirection: "row"}}>
    <Text style={styles.textLoc2}>Best Sale of the day</Text>
    <Text style={styles.textLoc3}>See More</Text>
    </View>
    <Image style={styles.banner1}
               source={require("../../assets/images/bglab.png")} />
    
    <View style={styles.boxFood}>
    <View style ={{flexDirection: "row"}}>
    <Link href="/two" asChild>
            <Pressable>
                {({ pressed }) => (
                       <Text style={styles.textFood}>MyBurgerLab(Cyberjaya)</Text>
            )}
            </Pressable>
            </Link>
    
    <AntDesign name="star" size={24} color="orange" style={styles.star} />
    <Text style={styles.textLoc4}>4.7</Text>
    </View>
    <View style ={{flexDirection: "row"}}>
    <Entypo name="back-in-time" size={24} color="grey" style={styles.time} />
    <Text style={styles.textLoc5}>25 min</Text>
    <Entypo name="dot-single" size={24} color="grey"  style={styles.dot}/>
    <MaterialIcons name="directions-bike" size={22} color="grey" style={styles.dot}/>
    <Text style={styles.textLoc5}>RM 7.00 </Text>
    </View>
    </View>
    </ScrollView>
    
  )
}

export default index

const styles = StyleSheet.create({
  boxLoc:{
    backgroundColor: '#000000',
    height: 180,
    width: 420,
  },
  boxFood:{
    backgroundColor: '##FFFFFF',
    height: 100,
    width: 390,
    marginLeft: 16,
    borderWidth: 2,
    borderColor: "#D8D8D8",
    
  },
  banner:{
    width: 400,
    height: 200,
    borderRadius: 10,
    marginLeft: 5,
    marginTop:20,
  },
  banner1:{
    width: 390,
    height: 160,
    
    marginLeft: 15,
    marginTop:20,
  },
  boxCat:{
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 140,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",

  },
  imgCat:{
    height: 40,
    width: 40,
    marginLeft: 20,
    marginTop: 10,
  },
  textCat:{
    marginLeft: 10,
    marginTop: 20,
    fontSize: 18,
    fontWeight:'bold',
  },
  textLoc:{
    color: '#C7C7C7',
    paddingTop:30,
    paddingLeft: 20,
  },
  textLoc1:{
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingTop:10,
    fontWeight:'bold',
  },
  textLoc2:{
    color: '#000000',
    paddingTop:20,
    paddingLeft: 20,
    fontWeight:'bold',
    fontSize: 20,
  },
  textLoc3:{
    color: '#F25D00',
    paddingLeft: 130,
    paddingTop:26,
   
  },
  textLoc4:{
    color: '#000000',
    fontSize:20,
    paddingTop:20,
    paddingLeft: 2,
    fontWeight:'bold',
  },
  textLoc5:{
    color: 'grey',
    paddingLeft: 5,
    paddingTop:12,
    fontSize: 16
  },
  textCart:{
    color: '#FFFFFF',
    paddingTop:8,
    paddingLeft: 6,
    fontSize:20,
    fontWeight:'bold',
  },
  textFood:{
    color: '#000000',
    paddingTop:18,
    paddingLeft: 10,
    fontWeight:'bold',
    fontSize: 18,
    flexDirection: "row",
  },
  arrowDown:{
    paddingTop:8,

  },
  cart:{
    paddingTop:8,
    paddingLeft:10,
  },
  star:{
    paddingTop:18,
    paddingLeft:90,
  },
  time:{
    paddingTop:10,
    paddingLeft:12,
  },
  dot:{
    paddingTop:12,
  },
  boxORG:{
    backgroundColor: '#F25D00',
    height: 40,
    width: 70,
    marginLeft: 130,
    borderRadius: 10,
    flexDirection: "row",
    
  },
  TextInput: {
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderColor: "#CCCACA",
    width:350,
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
    
  },
})