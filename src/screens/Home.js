import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Imagem from "../assets/logo.png";
import { StatusBar } from 'expo-status-bar';
import imagem2 from "../assets/arroz com frango cremoso.png";
import imagem3 from "../assets/cookie.jpg";
import imagem4 from "../assets/bife a parmegiana.jpg";
import imagem5 from "../assets/batata gratinada.png";
import imagem6 from "../assets/cupkckae.jpg";
import usuario from "../assets/usuario.png";



const Home = ({ navigation }) => (
  <View style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <View style={{
      height: 85,
      width: 470,
      backgroundColor: "#640C0C",
      marginTop: 40,
      alignItems: "center"
    }}>
      <Image style={{
        height: 100,
        width: 100,
      }}
        source={Imagem}></Image>
      <TouchableOpacity>
       <Image style={{
        height: 40,
        width: 40,
        marginLeft:350,
        marginTop:-70, }}
        source={usuario}></Image>
        </TouchableOpacity>
        <Text>Pratos Principais</Text>
    </View>
    
    <ScrollView>
    
      <StatusBar barStyle="light-content" backgroundColor="#640C0C" />
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 100, borderRadius: 15 }} source={imagem2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 40, borderRadius: 15 }} source={imagem5} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 40, borderRadius: 15 }} source={imagem4} />
      </TouchableOpacity>
      <Text>Sobremesas</Text>
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 40, borderRadius: 15 }} source={imagem6} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 40, borderRadius: 15 }} source={imagem3} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 40, borderRadius: 15 }} source={imagem3} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{ width: 272, height: 101, marginTop: 40, borderRadius: 15 }} source={imagem6} />
      </TouchableOpacity>
    </ScrollView>
  </View>

);


export default Home;



