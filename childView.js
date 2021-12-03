import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import children from './data/children.json';

function Child({ name }) {
  return (
    <TouchableHighlight
      style={styles.account}
      onPress={() => name('Test')}
      underlayColor="rgb(195, 177, 225,.6)">
      <View style={styles.wordAlignment}>
        <Text style={styles.words}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}
function Add() {
  return (
    <TouchableHighlight
      style={styles.accountAdd}
      underlayColor="rgb(195, 177, 225,.6)">
      <View style={styles.wordAlignment}>
        <Text style={styles.add}>+</Text>
      </View>
    </TouchableHighlight>
  );
}

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
      <FlatList
        style={styles.container}
        data={children}
        renderItem={({ item }) => {
          return(<Child key={item.id} name={item.name} />)
        }}
      />
      <Add />
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    flexWrap: 'wrap',
    justifyContent: 'left',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: -19,
    fontSize: 90,
  },
  border: {
    height: Dimensions.get('window').height * 0.09,
    width: Dimensions.get('window').width,
    backgroundColor: '#f4c2c2',
    flexDirection: 'row',
    justifyContent: 'end',
  },
});
