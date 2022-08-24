import React from "react";
import {View, Text, StyleSheet} from "react-native";




export default function Home(){
  
  return (

    <View style={styles.container}>
      <Text style={styles.texto}>Vamos começar as Navegações</Text>
    </View>

  )
}
  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#9298f5"
  },
  texto:{
    fontSize:32,
    fontWeight: "bold",
    color: "#fff"
    
  }


})