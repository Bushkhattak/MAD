import { StyleSheet, Text, View, Button, TextInput} from "react-native";
import { useState} from "react";

 export default function App() {
  function handleSubmit(){
    console.log('clicked')
    setIsHungry(!ishungry)
  }

  function feedMyCat(){

  }

  function handleInput(arg){

  }

  const [ishungry, setIsHungry] = useState(true)

  return(
  
    <View style= {styles.container}>
<Text onPress={feedMyCat}>I am a cat and i am {ishungry?'please feed me as i am hungry':'do not feed me as i am already full'}</Text>
<TextInput placeholder="type here..." onChangeText={handleInput}></TextInput>
<Button onPress={handleSubmit} title="SUBMIT" color='RED'></Button>

    </View>
    
  )
 }