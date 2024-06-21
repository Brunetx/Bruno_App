// SobreRestaurante.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";



const AboutMe = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre Mim</Text>
            <Text style={styles.information}>
            Bacharel em direito, com paixão por tecnologia, hoje trabalho na Procuradoria geral do Estado, 
            mas tem como objetivo mudar a área de formação e com esse intuito iniciou os estudos no curso de Analise e 
            Desenvolvimento de Sistemas na Faculdade Senac, atualmente estou cursando o terceiro período do curso.
            </Text>

            <Text style={styles.information}>
                Dentro do Curso de ADS do Senac, tenho cada vez mais aprimorado meus conhecimentos no campo da tecnologia 
                e na analise e desenvolvimento de sistemas, tenho observado também que me interesso bastante pela parte de
                gerenciamento do projeto, bem como na elaboração de documentos quando se é necessário.
            </Text>
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECE9E1",
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3D3D3D",
    textAlign: "center"
  },
  information: {
    fontSize: 18,
    lineHeight: 26,
    marginVertical: 10,
    textAlign: "justify",
    color: "#304145",
    paddingHorizontal: 20,
    backgroundColor: "#ECE9E1",
    padding: 10,
    shadowColor: "#000",
    elevation: 3
  }
});



export default AboutMe;
