import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome!</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={()=> {/*Do something*/}}>
            <Text style={styles.buttonText}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> {/*Do something*/}}>
            <Text style={styles.buttonText}>Button 2</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});