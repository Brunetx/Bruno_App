import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Formacao = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formação</Text>
            
                <View style={styles.container_formation}>
                
                    <Text style={styles.title_formation}>Análise e Desenvolvimento de Sistemas</Text>
                    <Text style={styles.information}>Faculdade SENAC | 2023-</Text>

                    <Text style={styles.title_formation}>Graduação em Direito</Text>
                    <Text style={styles.information}>Uninassau | 2014-2020</Text>
                </View>
            


            <Text style={styles.title}>Cursos</Text>
                <View style={styles.container_formacao}>
                    <Text style={styles.title_formacao}>Curso JAVA</Text>
                    <Text style={styles.information}>
                        Fuctura 
                    </Text>

                    <Text style={styles.title_formacao}>Curso de Idiomas</Text>
                    <Text style={styles.information}>
                        Senac | Pre-Intermediate
                    </Text>

                </View>
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE9E1",
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3D3D3D",
    marginBottom: 30,
    textAlign: "center"
  },
  container_formacao: {
    padding: 10,
    marginBottom: 30,
    elevation: 3,
  },
  title_formacao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#304145",
    marginBottom: 5
  },
  information: {
    fontSize: 16,
    lineHeight: 22,
    color: "#304145",
    paddingBottom: 25
  }
});



export default Formacao;
