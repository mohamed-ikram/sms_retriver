
import React from 'react';
import SmsRetriever from 'react-native-sms-retriever';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const onSmsListenerPressed = async () => {
  try {
    const registered = await SmsRetriever.startSmsRetriever();
    console.log(registered);
    if (registered) {
      SmsRetriever.addSmsListener(event => {
        if(event.message){
          alert(event.message);
        }else{
          alert("ooolala")
        }
        console.log(event.message);
        SmsRetriever.removeSmsListener();
      }); 
    }
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
  return (
    <View>
      <Text>Hello</Text>
      <Button title="sms" onPress={onSmsListenerPressed} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
