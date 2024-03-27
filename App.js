import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <TextInput style={style.text} placeholder="Card Number" />
        <TextInput style={style.text} placeholder="Secret Code" />
        <TextInput style={style.text} placeholder="Expiration Date" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
