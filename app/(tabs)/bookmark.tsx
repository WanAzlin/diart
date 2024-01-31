import { Button, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Link, Tabs } from 'expo-router';



export default class App extends React.Component{
  state ={
    value: 0,
    total_taps: 0,
  
  }

incrementValue1 = () => {
  this.setState({
    value: this.state.value + 1,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue1= () => {
  this.setState({
    value: this.state.value - 1,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}


  render(){
      return (
        <View>
        <View style={styles.boxOrder}>
        <View style ={{flexDirection: "row"}}>
        <Image style={styles.imgOrder}
                 source={require("../../assets/images/bg2.webp")} />
          <View style={styles.boxOrder1}>
          <Text style={styles.textOrder}>Vivien's Husband</Text>
          <View style ={{flexDirection: "row"}}>
              <Entypo name="location-pin" size={24} color="red" style={styles.star} />
              <Text style={styles.textRev}>250 m(10 Minutes)</Text>
          </View>
          <View style={styles.boxOrder4}>
          <Text style={styles.textOrder2}>Add To Cart</Text>
          </View>
          </View>
          
        </View>
        
        </View>
       
      </View>
  );
  }

}

const styles = StyleSheet.create({
  boxOrder:{
    backgroundColor: '#FFFFFF',
    height: 180,
    width: 400,
    marginLeft: 5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 50,
    borderRadius: 20,
  
  },
  imgOrder:{
    height: 140,
    width: 180,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 20,
},
boxOrder1:{
  
},
boxOrder2:{
  backgroundColor: '#FFFFFF',
  height: 480,
  width: 440,
  marginLeft: 5,
  shadowRadius: 5,
  elevation: 5,
  marginTop: 300,
  borderRadius: 5,

},
boxOrder3:{
  backgroundColor: '#000000',
  height: 50,
  width:390,
  marginLeft: 5,
  shadowRadius: 5,
  elevation: 5,
  marginTop: 30,
  borderRadius: 20,

},
textOrder:{
    marginLeft: 12,
    marginTop: 30,
    fontSize: 18,
    fontWeight:'bold',
  },
  textOrder2:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight:'bold',
    color: "#FFFFFF",
  },
  boxOrder4:{
    backgroundColor: '#000000',
    height: 40,
    width: 180,
    marginLeft: 10,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 30,
    borderRadius: 10
  
  },
  star:{
    paddingTop:10,
    paddingLeft:10,
  },
  textRev:{
    color: 'grey',
    paddingLeft: 5,
    paddingTop:12,
    fontSize: 15,
  },
  textPrice:{
    marginLeft: 18,
    marginTop: 52,
    fontSize: 18,
    fontWeight:'bold',
  },
  minus:{
    paddingTop:50,
    paddingLeft:12,
  },
  number:{
    paddingTop:48,
    paddingLeft:5,
    fontSize: 25,
  },
  tDelivery:{
    marginLeft: 18,
    marginTop: 22,
    fontSize: 18,
    fontWeight:'bold',
  },
  tDeliveryDetails:{
    marginLeft: 188,
    marginTop: 22,
    fontSize: 18,
    fontWeight:'bold',
    color: "#E46806"
  },
  tDeliveryDetails2:{
    marginLeft: 250,
    marginTop: 22,
    fontSize: 18,
    fontWeight:'bold',
    color: "#E46806"
  },
});
