import React, { Component } from 'react';
import Background from './assets/Background.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from './assets/Logo.png'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window'); 

export default class App extends Component {
  

  render() {
    return (
      <ImageBackground source={Background} style={styles.backgroundContainer}>

        <View>
          <Image source={Logo} style={styles.logo}/>
        </View>

        <View style={styles.inputContainer}>
        <Icon 
          name='ios-person' 
          size={28} 
          color={'rgba(255,255,255, 0.7)'} 
          style={styles.inputIcon}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'rgba(255,255,255, 0.7)'}
          underlineColorAndroid= "transparent"
        />
        </View>

        <View style={styles.inputContainer}>
        <Icon 
          name='ios-lock' 
          size={28} 
          color={'rgba(255,255,255, 0.7)'} 
          style={styles.inputIcon}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255, 0.7)'}
          underlineColorAndroid= "transparent"
        />
        </View>

      <TouchableOpacity style={styles.btnLogin}>
      <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      
      </ImageBackground>
         
    
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: "center",
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    paddingLeft: 38,
    marginTop: 6 

  },
  inputContainer: {
    marginTop: 10
  },
  textLogin: {
    color: 'rgba(255,255,255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  logo: {
    width: 200,
    height: 200,
    
  }
});