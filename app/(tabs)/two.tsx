import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
export default class App extends React.Component{
  state ={
    value: 0,
    total_taps: 0,
  
  }

incrementValue1 = () => {
  this.setState({
    value: this.state.value + 50,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}

incrementValue2 = () => {
  this.setState({
    value: this.state.value + 100,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}


  render(){
      return (
        <ScrollView >
        <Image style={styles.banner}
               source={require("../../assets/images/banner2.webp")} />
        <View style ={{flexDirection: "row"}}>
        <Image style={styles.tick}
               source={require("../../assets/images/verify.png")} />
        <Text style={styles.textTitle}>My BurgerLab, Cyberjaya</Text>
       
        </View>
        <View style ={{flexDirection: "row"}}>
        <AntDesign name="star" size={20} color="orange" style={styles.star} />
        <Text style={styles.textRev}>5.0(1,023 Reviews)</Text>
        <Entypo name="location-pin" size={24} color="red" style={styles.star} />
        <Text style={styles.textRev}>250 m(10 Minutes)</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.boxCat}>
          <Text style={styles.titleCat}>Voucher </Text>
          <View style={styles.boxCat1}>
          <Text style={styles.textCat}>Discount 80% </Text>
          <View style={styles.boxCat2}>
          <Text style={styles.titleClaim}>Claim </Text>
          </View>
          </View>
          </View>
          <View style={styles.boxCat}>
          <Text style={styles.titleCat}>Voucher </Text>
          <View style={styles.boxCat1}>
          <Text style={styles.textCat}>Discount 50% </Text>
          <View style={styles.boxCat2}>
          <Text style={styles.titleClaim}>Claim </Text>
          </View>
          </View>
          </View>
         
     </ScrollView>
     <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.boxMenu1}>
        
          <Text style={styles.textMenu1}>All Menu(24)</Text>
          </View>
          <View style={styles.boxMenu}>
        
          <Text style={styles.textMenu}>Drinks(10)</Text>
          </View>
          <View style={styles.boxMenu}>
       
          <Text style={styles.textMenu}>Snacks(10)</Text>
          </View>
     </ScrollView>
     <View style ={{flexDirection: "row"}}>
        <View style={styles.boxOrder}>
             <Image style={styles.imgOrder}
               source={require("../../assets/images/bg1.webp")} />
        <View style={styles.boxFood}>
         <Text style={styles.textOrder}>Vivien's Husband</Text>
        <View style ={{flexDirection: "row"}}>
    
            <FontAwesome5 name="hamburger" size={15} color="grey" style={styles.time}/>
            <Text style={styles.textLoc5}>393 KCal</Text>
        </View>
         <View style ={{flexDirection: "row"}}>
    
           <Text style={styles.textPrice}>RM 21.90</Text>
           <Link href="/order" asChild>
            <Pressable>
                {({ pressed }) => (
                       <AntDesign name="plussquare" size={30} color="black"  style={styles.plus} />
            )}
            </Pressable>
            </Link>
           
        </View>
        </View>
    </View>
    <View style={styles.boxOrder}>
     <Image style={styles.imgOrder}
               source={require("../../assets/images/bg2.webp")} />
    <View style={styles.boxFood}>
    <Text style={styles.textOrder}>Bondi Kicker</Text>
        <View style ={{flexDirection: "row"}}>
    
            <FontAwesome5 name="hamburger" size={15} color="grey" style={styles.time}/>
            <Text style={styles.textLoc5}>493 KCal</Text>
        </View>
         <View style ={{flexDirection: "row"}}>
    
           <Text style={styles.textPrice}>RM 31.90</Text>
           <AntDesign name="plussquare" size={30} color="black" onPress={this.incrementValue2}style={styles.plus} />
        </View>
    </View>
    </View>
    
     </View>
     
    </ScrollView>
 
    
  );
  }

}

const styles = StyleSheet.create({
  banner:{
    width: 400,
    height: 200,
    borderRadius: 10,
    marginLeft: 5,
    marginTop:20,
  },
  tick:{
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 15,
    marginTop:15,
  },
  textTitle:{
    color: '#000000',
    paddingTop:28,
    paddingLeft: 10,
    fontWeight:'bold',
    fontSize: 23,
  },
  star:{
    paddingTop:10,
    paddingLeft:20,
  },
  textRev:{
    color: 'grey',
    paddingLeft: 5,
    paddingTop:12,
    fontSize: 15,
  },
  boxCat:{
    backgroundColor: '#22BE10',
    height: 100,
    width: 260,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowRadius: 5,
    elevation: 5,
    
  },
  titleCat:{
    marginLeft: 10,
    marginTop: 20,
    fontSize: 12,
    color: '#FFFFFF',
  },
  textCat:{
    marginLeft: 10,
    marginTop: 12,
    fontSize: 20,
    fontWeight:'bold',
    color: '#FFFFFF',
  },
  titleClaim:{
    textAlign:'center',
    marginTop: 15,
    fontSize: 20,
    fontWeight:'bold',
    color: "#22BE10",
  },
  boxCat1:{
    flexDirection: 'row',
    
  },
  boxCat2:{
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 90,
    marginBottom:150,
    borderRadius: 10,
    marginLeft: 8,
  },
  boxMenu:{
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
  boxMenu1:{
    backgroundColor: '#E56806',
    height: 60,
    width: 140,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",

  },
  textMenu:{
    marginLeft: 25,
    marginTop: 20,
    fontSize: 18,
    fontWeight:'bold',
  },
  textMenu1:{
    marginLeft: 12,
    marginTop: 20,
    fontSize: 18,
    fontWeight:'bold',
    color:'#FFFFFF',
  },
  textOrder:{
    marginLeft: 12,
    marginTop: 10,
    fontSize: 18,
    fontWeight:'bold',
  },
  textPrice:{
    marginLeft: 12,
    marginTop: 10,
    fontSize: 20,
    fontWeight:'bold',
  },
  boxOrder:{

  },
imgOrder:{
    height: 150,
    width: 180,
    marginTop: 20,
    marginLeft: 20,
   
},
boxFood:{
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 182,
    marginLeft: 19,
    
    
    
  },
  plus:{
    paddingTop:8,
    paddingLeft:45,
  },
  time:{
    paddingTop:10,
    paddingLeft:12,
  },
  textLoc5:{
    color: 'grey',
    paddingLeft: 5,
    paddingTop:12,
    fontSize: 12,
  },
  boxORG:{
    backgroundColor: '#F25D00',
    height: 40,
    width: 60,
    marginLeft: 2,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    
  },
  cart:{
    paddingTop:8,
    paddingLeft:10,
  },
  textCart:{
    color: '#FFFFFF',
    paddingTop:8,
    paddingLeft: 6,
    fontSize:20,
    fontWeight:'bold',
  },
});
