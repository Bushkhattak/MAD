import {View,Text, StyleSheet, TextInput,Button} from 'react-native'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  
  // npm i react-native-vector-icons  
  //https://fontawesome.com/icons/categories/coding
  //https://www.npmjs.com/package/react-native-vector-icons
  let [inputfield , setIsInput]= useState('');
  let [displayField, setDisplayField]= useState('');

  function handleInputChange(input)
  {

    setIsInput(input);
    
  }
  function handleSumit()
  {
    setDisplayField(inputfield);
  }

  return (
   <>
    

<View style={styles.container}>
 
<Text onPress={handleCatStatus}>Hello I am a counter  {displayField}</Text>
<TextInput onChangeText={handleInputChange} placeholder='enter text here'></TextInput>
<Button title='Submit' color='red' onPress={handleSumit} ></Button>
</View>

</>
  );
}

const styles=StyleSheet.create(
  
{containerSearch:{
  flex:1,
  flexDirection:'column',
  justifyContent:'center'
},
  container:{
    
    flex:1, 
    flexDirection:'column',
    
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor:'white',


  },
  box1:
  {
    backgroundColor:'red',
    width: '30%',
    height:'10%'
  },
  box2:
  {
    backgroundColor:'black',
    width: '30%',
    height:'10%'
  },
  box3:
  {
backgroundColor:'yellow',
width: '30%',
    height:'10%'
  },
  box4:
  {
    backgroundColor:'purple',
    width: '30%',
    height:'10%'
  },
  inputText:
  {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
   width:200
  }
}
);

