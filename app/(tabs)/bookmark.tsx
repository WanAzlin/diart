import { Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';



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
decrementValue1= () => {
  this.setState({
    value: this.state.value - 50,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue1= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
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
decrementValue2= () => {
  this.setState({
    value: this.state.value - 100,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue2= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}
incrementValue3 = () => {
  this.setState({
    value: this.state.value + 180,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
incrementValue4 = () => {
  this.setState({
    value: this.state.value +250,
    total_taps: this.state.total_taps + 1,
   

  })
  console.log("Value: " + (this.state.value +1))
}
decrementValue3= () => {
  this.setState({
    value: this.state.value - 80,
    total_taps: this.state.total_taps - 1,
   
  })
  console.log("Value: " + (this.state.value +1))
}
resetValue3= () => {
  this.setState({
    value: this.state.value = 0,
    total_taps: this.state.total_taps = 0,
   
  })
  console.log("Value: " + (this.state.value +1))
}


  render(){
      return (
    <View style={styles.container}>
       <Text style={styles.title}>Set Saving</Text>
       <View style ={{flexDirection: "row"}}> 
       <Text style={styles.cSaving}>MYR</Text>
       <Text style={{ fontSize: 50, paddingBottom: 30, color: '#1876D1', alignSelf: "center",}}>{" "+this.state.value}</Text>
       </View>
      
    <Text style={styles.title2}>Choose:</Text>
    <View style={{flexDirection:'row'}}> 
    <View style={styles.pButton1}>
          <Button color='#FFFFFF'   onPress={this.incrementValue1} title="50"/>
    </View>
    <View style={styles.pButton1}>
         <Button color='#FFFFFF' onPress={this.incrementValue2} title="100"/>
    </View>
    <View style={styles.pButton1}>
          <Button color='#FFFFFF'   onPress={this.incrementValue3} title="180"/>
    </View>
    <View style={styles.pButton1}>
          <Button color='#FFFFFF'   onPress={this.incrementValue4} title="250"/>
    </View>
    </View> 
    <View style={styles.topbutton}>
      <Button  color="#FFFFFF" onPress={this.resetValue2} title="Continue"/>
    </View>
    <View >
      <Button  color="#FFFFFF" onPress={this.resetValue2} title="Reset"/>
    </View>

   </View>      
        
      
     
 
    
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#000000'
  },
  cSaving: {
    fontSize: 15,
    marginLeft: 25,
   
    color: '#837F7F',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: "#ECF0F1",
    marginLeft: 25,
    paddingBottom:50,
   
  },
  title2: {
    fontSize: 20,
    color: "#ECF0F1",
    marginRight: 280,
    paddingBottom:20,
   
  },
  box1: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#FEFEFE",
    padding: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 6,
    marginTop: 30,
    
  },

 
  
  topbutton: { 
    marginRight: 8,
    justifyContent: "center",
    borderRadius: 30,
    borderColor: '#FFFFFF',
    paddingHorizontal: 140,
    alignSelf: "center",
    backgroundColor: "#1876D1",
    borderWidth: 2,
    marginTop: 50,
    paddingVertical: 5,
  },
  

  pButton1: { 
    marginRight: 10,
    borderRadius: 15,
    borderColor: '#939393',
    paddingHorizontal: 14,
    borderWidth: 2,
    backgroundColor: "#434343",
  },
  
});
