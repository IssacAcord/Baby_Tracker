import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#f4c2c2');
  const [name] = useState('John Smith');
  return (
    <>
      <View
        style={[
          styles.border,
          { backgroundColor, justifyContent: 'center', paddingTop: 10 },
        ]}>
        <Text style={{ fontSize: 30, fontFamily: 'lucidia Grande' }}>
          Hello, Jane Doe
        </Text>
      </View>
      <View style={[styles.container]}>
        <Text style={[styles.words,{marginBottom:15}]}> Please enter information of new child</Text>
        <TextInput style={[styles.textBox]}
        placeholder="Enter name of the child"/>
        <TextInput style={[styles.textBox]}
        placeholder="Enter Age (months)"/>
        <TextInput style={[styles.textBox]}
        placeholder="Enter gender of the child"/>
        <TextInput style={[styles.textBox]}
        placeholder="Enter Weight (in pounds)"/>
        <TextInput style={[styles.textBox]}
        placeholder="Enter Height of the child"/>
        <View style={[styles.spacer]}></View>
        <Button title="add" style={[styles.add]}/>
        
      </View>
      <View
        style={[
          styles.border,
          { backgroundColor, justifyContent: 'space-between' },
        ]}>
        <TouchableHighlight>
          <Text style={styles.log}>log out</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setBackgroundColor('#89cff0')}
          underlayColor="rgba:(0,0,255,.6">
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.color}>◐</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  color: {
    fontSize: 40,
    marginRight: 10,
  },
  log: {
    fontSize: 35,
    width: 130,
    marginLeft: 5,
    marginTop: 7,
    fontFamily: 'lucidia Grande',
    paddingLeft: 10,
    borderRadius: 40,
    borderWidth: 3,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    flexWrap: 'wrap',
    justifyContent: 'left',
    flexDirection: 'collumn',
    alignItems: 'center',
    paddingTop:50,
  },
  accountAdd: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.9,
    borderWidth: 4,
    borderRadius: 8,
    padding: 0,
    marginLeft:20,
    margin: Dimensions.get('window').width * 0.035,
    fontSize: 30,
    borderColor: '#C3B1E1',
  },
  account: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.9,
    borderWidth: 4,
    borderRadius: 8,
    padding: 10,
    margin: Dimensions.get('window').width * 0.035,
    fontSize: 30,
    borderColor: '#C3B1E1',
  },
  words: {
    paddingTop: 20,
    fontSize: 25,
    fontFamily: 'lucidia Grande',
    alignSelf: 'center',
    textAlign: 'center',
  },
  wordAlignment: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  add: {
    flex:1,
  },
  border: {
    height: Dimensions.get('window').height * 0.09,
    width: Dimensions.get('window').width,
    backgroundColor: '#f4c2c2',
    flexDirection: 'row',
    justifyContent: 'end',
  },
  textBox:{
    width: Dimensions.get('window').width*.8,
    borderWidth:2,
    fontSize:20,
    borderRadius:6,
    padding:4,
    marginTop:5,
  },
  spacer:{
    margin:30,
  }
});
