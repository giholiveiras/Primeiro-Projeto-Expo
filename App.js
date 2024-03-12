import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
        source={{ uri:'https://www.folhadealphaville.com.br/images/articles/12681/b2ap3_medium_HELLO.png' }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

