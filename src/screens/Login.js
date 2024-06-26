import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, Image } from "react-native";
import FacebookLogo from "../assets/logo.png";
import CustomButton from "../components/CustomButton.js";
import styles from "../../Styles";

export default function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError] = useState("")
  const navigation =useNavigation();
 
  // Credenciais
  const credentialsEmail = "nicolas@gmail.com";
  const credentialsPassword = "aluno123";

  function handleSubmit(){
    setError("");
    if(!email.trim()){
      setError(" Por favor, insira um email.");
      return;
    }
    if(!password.trim()){
      setError(" Por favor, insira uma senha.");
      return;
    }
    if (email !== credentialsEmail|| password !== credentialsPassword){
      setError("Credenciais inválidas");
      setEmail("");
      setPassword("");
    }
    navigation.navigate("Home", {username: credentialsEmail})
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={FacebookLogo} />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) =>setEmail (text) }
        placeholder="Digite seu email"
        placeholderTextColor="#959ba3"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) =>setPassword(text)}
        placeholder="Digite sua senha"
        placeholderTextColor="#959ba3"
        secureTextEntry={true}
      />
      <CustomButton title="Entrar" onPress={() => {
        handleSubmit()
      }} 
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}