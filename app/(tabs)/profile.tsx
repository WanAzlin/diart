import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const profile = () => {
  return (
    <View>
      <View style={styles.boxOrder}>
      <Image style={styles.iC2}
                       source={require("../../assets/images/alin.jpg")} /> 
      <Text style={styles.title}>Wan Azlin</Text>
      <Text style={styles.title1}>Members</Text>
      </View>
      <View style={styles.boxOrder1}>
      <View style ={{flexDirection: "row"}}>
      <FontAwesome5 name="user-cog" size={30} color="black"  style={styles.icon}/>
      <Text style={styles.title2}>User Settings</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="black"  style={styles.arrow}/>
       </View>
       <View style ={{flexDirection: "row"}}>
       <MaterialIcons name="notifications" size={30} color="black" style={styles.icon}/>
      <Text style={styles.title2}>Notifications</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="black"  style={styles.arrowNoti}/>
       </View>
       <View style ={{flexDirection: "row"}}>
       <Entypo name="ticket" size={30} color="black" style={styles.icon} />
      <Text style={styles.title2}>Vouchers</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="black"  style={styles.arrowVouchers}/>
       </View>
       <View style ={{flexDirection: "row"}}>
       <FontAwesome name="address-book" size={30} color="black" style={styles.icon} />
      <Text style={styles.title2}>Default Address</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="black"  style={styles.arrowAddress}/>
       </View>
       <View style ={{flexDirection: "row"}}>
       <Entypo name="help-with-circle" size={30} color="black" style={styles.icon} />
      <Text style={styles.title2}>Help</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="black"  style={styles.arrowHelp}/>
       </View>
       <View style={styles.boxOrder4}>
          <Text style={styles.textOrder2}>Logout</Text>
          </View>
      </View>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  iC2: {
    width: 100,
    height: 100,
    marginLeft: 155,
    marginTop:18,
    borderRadius: 50,
  },
  title:{
    marginLeft: 145,
    marginTop: 10,
    fontSize: 28,
    fontWeight:'bold',
  },
  title1:{
    marginLeft: 175,
    marginTop: 2,
    fontSize: 15,
    
  },
  title2:{
    marginLeft: 15,
    marginTop: 30,
    fontSize: 18,
    fontWeight:'bold',
  },
  boxOrder:{
    backgroundColor: '#FFFFFF',
    height: 200,
    width: 400,
    marginLeft: 5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
    borderRadius: 20,
  
  },
  boxOrder1:{
    backgroundColor: '#FFFFFF',
    height: 450,
    width: 400,
    marginLeft: 5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
    borderRadius: 20,
  
  },
  icon:{
    marginLeft: 20,
    marginTop: 20,
  },
  arrow:{
    marginLeft: 173,
    marginTop: 28,
  },
  arrowNoti:{
    marginLeft: 190,
    marginTop: 28,
  },
  arrowVouchers:{
    marginLeft: 220,
    marginTop: 28,
  },
  arrowAddress:{
    marginLeft: 165,
    marginTop: 28,
  },
  arrowHelp:{
    marginLeft: 263,
    marginTop: 28,
  },
  boxOrder4:{
    backgroundColor: '#000000',
    height: 50,
    width: 370,
    marginLeft: 10,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 130,
    borderRadius: 10,
    alignSelf: 'center',
  
  },
  textOrder2:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight:'bold',
    color: "#FFFFFF",
  },
})