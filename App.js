import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput } from 'react-native';
import { style } from './App.style';
import { useRef } from 'react';

const App = () => {
  const secretCodeRef = useRef();
  const expirationDateRef = useRef();

  function onCardNumberChange(text) {
    if (text.length > 16) {
      secretCodeRef.current.focus();
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <TextInput
          onChangeText={onCardNumberChange}
          style={style.text}
          placeholder="Card Number"
        />
        <TextInput
          ref={secretCodeRef}
          style={style.text}
          placeholder="Secret Code"
        />
        <TextInput
          ref={expirationDateRef}
          style={style.text}
          placeholder="Expiration Date"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
