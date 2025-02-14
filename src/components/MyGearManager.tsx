import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Title, Text, Surface, Checkbox, List } from "react-native-paper";
import { sonyCameras, sonyLenses } from "../data/sonyData";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyGearManager() {
    const [myCameras, setMyCameras] = React.useState<number[]>([]);
    const [myLenses, setMyLenses] = React.useState<number[]>([]);

    React.useEffect(() => {
        loadSavedGear();
    }, []);

    const loadSavedGear = async () => {
        try {
            const savedCameras = await AsyncStorage.getItem('myCameras');
            const savedLenses = await AsyncStorage.getItem('myLenses');
            if (savedCameras) setMyCameras(JSON.parse(savedCameras));
            if (savedLenses) setMyLenses(JSON.parse(savedLenses));
        } catch (error) {
            console.error('Error loading saved gear:', error);
        }
    };

    const toggleCamera = async (cameraId: number) => {
        try {
            const newCameras = myCameras.includes(cameraId)
                ? myCameras.filter(id => id !== cameraId)
                : [...myCameras, cameraId];
            setMyCameras(newCameras);
            await AsyncStorage.setItem('myCameras', JSON.stringify(newCameras));
            console.log('Saved cameras:', newCameras); // Debug log
        } catch (error) {
            console.error('Error saving cameras:', error);
        }
    };

    const toggleLens = async (lensId: number) => {
        try {
            const newLenses = myLenses.includes(lensId)
                ? myLenses.filter(id => id !== lensId)
                : [...myLenses, lensId];
            setMyLenses(newLenses);
            await AsyncStorage.setItem('myLenses', JSON.stringify(newLenses));
            console.log('Saved lenses:', newLenses); // Debug log
        } catch (error) {
            console.error('Error saving lenses:', error);
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <Surface style={styles.container} elevation={2}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>My Gear</Title>

                        <List.Section>
                            <List.Subheader>My Cameras</List.Subheader>
                            {sonyCameras.map((camera) => (
                                <List.Item
                                    key={camera.id}
                                    title={camera.model}
                                    left={() => (
                                        <Checkbox
                                            status={myCameras.includes(camera.id) ? 'checked' : 'unchecked'}
                                            onPress={() => toggleCamera(camera.id)}
                                        />
                                    )}
                                />
                            ))}
                        </List.Section>

                        <List.Section>
                            <List.Subheader>My Lenses</List.Subheader>
                            {sonyLenses.map((lens) => (
                                <List.Item
                                    key={lens.id}
                                    title={lens.model}
                                    left={() => (
                                        <Checkbox
                                            status={myLenses.includes(lens.id) ? 'checked' : 'unchecked'}
                                            onPress={() => toggleLens(lens.id)}
                                        />
                                    )}
                                />
                            ))}
                        </List.Section>
                    </Card.Content>
                </Card>
            </Surface>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        marginVertical: 8,
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 24,
    },
}); 