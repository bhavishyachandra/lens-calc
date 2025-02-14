import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyGearManager from '../src/components/MyGearManager';

export default function GearPage() {
    return (
        <SafeAreaView style={styles.container}>
            <MyGearManager />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});