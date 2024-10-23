import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
export default function App() {
  
  return (
    <>
    <View style={styles.parentContainer}>
    <View style={styles.container}>
     <Text>Hello I am contained inside a container</Text>
     <Text>Hello I am contained inside a container</Text>
     

    </View>
    <View style={styles.container2}>
     <View style={styles.borderedBox}>
      <Icon name='search' size={25} color='red'></Icon>
     </View>


    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor:'red',
    display:'flex',
    
    flex:1,

  },
  borderedBox:{
    backgroundColor:'purple',
    width:30,
    height:40,
    borderWidth:2,
    borderRadius:2,
    borderColor:'grey'
  },
  container2: {
    
    backgroundColor:'yellow',
    display:'flex',
   
    flex:2,
    justifyContent:'space-around',
    alignItems:'center'

  },
  parentContainer:
  {
    width:'100%',
    height:'100%',
    backgroundColor:'black',
  }

   
    
    
  
  
});
