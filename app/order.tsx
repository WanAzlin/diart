import { Button, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar, } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import EditScreenInfo from '../components/EditScreenInfo';


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
        <View style={styles.container}>
        <Image style={styles.imgOrder}
             source={require("../assets/images/bg1.webp")} />
        <View style={styles.boxOrder}>
        <View style ={{flexDirection: "row", backgroundColor: '#E2E2E2'}}>
            <Text style={styles.textOrder}>Vivien's Husband</Text>
            <Text style={styles.textPrice}>RM 31.90</Text>
        </View>
        
        </View>
        <Text style={styles.textOrder}>Ingredients</Text>
        <Text style={styles.textLoc5}>Double Angus Cheeseburger, Creamy Peanut Butter, Blueberry Jam, Onion Jam, Signature Burger Sauce.</Text>
        <View style ={{flexDirection: "row"}}>
        <FontAwesome name="minus-circle" size={54} color="black"  style={styles.minus}  onPress={this.decrementValue1}/>
        <Text style={styles.number}>{" "+this.state.value}</Text>
        <AntDesign name="pluscircle" size={48} color="black" style={styles.minus}  onPress={this.incrementValue1}/>
        <View style={styles.boxMenu1}>
        <Link href="/cart" asChild>
            <Pressable>
                {({ pressed }) => (
                       <Text style={styles.textMenu1}>Add To Cart</Text>
            )}
            </Pressable>
            </Link>
        
        </View>
        </View>
  </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
  imgOrder:{
    width: 400,
    height: 300,
   
    marginTop: 20,
    marginLeft: 8,
   
},
boxOrder:{
  backgroundColor: '#E2E2E2',
  height: 65,
  width: 400,
  marginLeft: 8,
  shadowRadius: 5,
  elevation: 5,
  flexDirection: "row",

},
textOrder:{
  marginLeft: 12,
  marginTop: 20,
  fontSize: 25,
  fontWeight:'bold',
},
textPrice:{
  marginLeft: 90,
  marginTop: 25,
  fontSize: 20,
  fontWeight:'bold',
},
textLoc5:{
  color: 'grey',
  paddingLeft: 15,
  paddingTop:12,
  fontSize: 15,
},
minus:{
  paddingTop:200,
  paddingLeft:12,
},
number:{
  paddingTop:206,
  paddingLeft:8,
  fontSize: 35
},
boxMenu1:{
  backgroundColor: '#000000',
  height: 50,
  width: 230,
  marginLeft: 15,
  marginTop:200,
  borderRadius: 10,
  shadowRadius: 5,
  elevation: 5,
  flexDirection: "row",

},
textMenu1:{
  marginLeft: 60,
  marginTop: 15,
  fontSize: 18,
  fontWeight:'bold',
  color:'#FFFFFF',
},
});
