import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button,NativeBaseProvider} from "native-base";

export default function App() {
  async function onCreate(){
    try{
    const response = await fetch("http://192.168.111.3:3000/test/",{method: "POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner: "JUri",name:"JURi"})});
    }catch(err){
      console.log(err)
    }
  }
  return (
    <View style={styles.container}>
       <NativeBaseProvider>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress= {()=> onCreate()}>Create</Button>
      <StatusBar style="auto" />
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
