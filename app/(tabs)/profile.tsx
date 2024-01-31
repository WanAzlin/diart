import { StatusBar, } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function ModalScreen() {
  
  return (
    <View style={styles.container}>
          <Image style={styles.imgOrder}
               source={require("../../assets/images/bg1.webp")} />
          <View style={styles.boxOrder}>
          <View style ={{flexDirection: "row", backgroundColor: '#E2E2E2'}}>
              <Text style={styles.textOrder}>Bondi Kicker</Text>
              <Text style={styles.textPrice}>RM 31.90</Text>
          </View>
          
          </View>
          <Text style={styles.textOrder}>Ingredients</Text>
          <Text style={styles.textLoc5}>Double Angus Cheeseburger, Creamy Peanut Butter, Blueberry Jam, Onion Jam, Signature Burger Sauce.</Text>
    </View>
  );
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
  marginLeft: 130,
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
});
