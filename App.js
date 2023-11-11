import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Navigation from './Navigation/routes.js';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.heading}>Foodmato</Text>
    //   <Button title='Signup' color={'black'} style={styles.button}/>
    //   <StatusBar style="auto" />
    // </View>
    <Navigation/>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFBF00',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap:20

  },

  heading:{
    fontSize:30,
    fontWeight:'bold'

  },
  button:{
    margin:50
  }

  
});
