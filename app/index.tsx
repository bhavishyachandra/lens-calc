import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SonyCalculator from '../src/components/SonyCalculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SonyCalculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
