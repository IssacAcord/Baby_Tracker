import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Navstack from "../navigation";
import FlatButton from "../styles/button"

const welcomescreen = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:'https://cdn-icons-png.flaticon.com/512/941/941515.png'}}
            />
            <Text style={styles.text}>Baby Tracker</Text>
            <Text style={styles.note}>An interactive way to keep track of your baby's health. 
            Click continue to get started</Text>
            <FlatButton text='Continue' onPress={() =>
                navigation.navigate('SignIn')
                }/>
      </View>
    );
  };
 
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          paddingTop: 30,
          backgroundColor: '#EDBFB7',
          alignItems: 'center',
          justifyContent: 'flex-start',
      },
      image: {
          height: 250, 
          width: 100,
          aspectRatio: .8,
          resizeMode: 'contain',
          marginTop:60
    },
      text:{
          fontFamily: 'Noteworthy',
          fontSize: 47,
          justifyContent: 'center',
          fontWeight: "bold",
          marginTop: 20
      }, 
      note:{
        fontFamily: 'Noteworthy',
        fontSize: 23,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
  });

  export default welcomescreen