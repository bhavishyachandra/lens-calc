import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Card, Title, Text, Surface, DataTable, SegmentedButtons } from "react-native-paper";
import { sonyCameras, sonyLenses } from "../data/sonyData";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SonyCalculator() {
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedLens, setSelectedLens] = useState("");
  const [myCameras, setMyCameras] = useState<number[]>([]);
  const [myLenses, setMyLenses] = useState<number[]>([]);

  useEffect(() => {
    loadSavedGear();
  }, []);

  useEffect(() => {
    const interval = setInterval(loadSavedGear, 1000);
    return () => clearInterval(interval);
  }, []);

  const loadSavedGear = async () => {
    try {
      const savedCameras = await AsyncStorage.getItem('myCameras');
      const savedLenses = await AsyncStorage.getItem('myLenses');
      if (savedCameras) {
        const parsedCameras = JSON.parse(savedCameras);
        setMyCameras(parsedCameras);

        if (selectedCamera && !parsedCameras.includes(parseInt(selectedCamera))) {
          setSelectedCamera("");
        }
      }
      if (savedLenses) {
        const parsedLenses = JSON.parse(savedLenses);
        setMyLenses(parsedLenses);

        if (selectedLens && !parsedLenses.includes(parseInt(selectedLens))) {
          setSelectedLens("");
        }
      }
    } catch (error) {
      console.error('Error loading saved gear:', error);
    }
  };

  const filteredCameras = sonyCameras.filter(cam => myCameras.includes(cam.id));
  const filteredLenses = sonyLenses.filter(lens => myLenses.includes(lens.id));

  const camera = sonyCameras.find((cam) => cam.id === parseInt(selectedCamera));
  const lens = sonyLenses.find((lens) => lens.id === parseInt(selectedLens));

  const calculateEquivalent = (focalLength: number, mode: any, lens: any) => {
    // Default crop factors if cropModes is not defined
    const defaultCrops = {
      "full-frame": { fullFrame: 1, apsC: 1.5 },
      "aps-c": { fullFrame: 1.5, apsC: 1.5 }
    };

    // Use lens cropModes if available, otherwise use defaults
    const cropModes = lens.cropModes || defaultCrops[lens.type as keyof typeof defaultCrops];
    const effectiveCrop = lens.type === "aps-c" ? cropModes.fullFrame : mode.cropFactor;
    return Math.round(focalLength * effectiveCrop);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Surface style={styles.container} elevation={2}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Sony Lens Calculator</Title>

            {filteredCameras.length === 0 ? (
              <Text style={styles.noGearText}>
                Please add your cameras in the My Gear page
              </Text>
            ) : (
              <View style={styles.selectContainer}>
                <Title style={styles.selectLabel}>Camera</Title>
                <SegmentedButtons
                  value={selectedCamera}
                  onValueChange={(value) => setSelectedCamera(value)}
                  buttons={[
                    { value: "", label: "Select Camera" },
                    ...filteredCameras.map((camera) => ({
                      value: camera.id.toString(),
                      label: camera.model,
                    })),
                  ]}
                  style={styles.segmentedButton}
                />
              </View>
            )}

            {filteredLenses.length === 0 ? (
              <Text style={styles.noGearText}>
                Please add your lenses in the My Gear page
              </Text>
            ) : (
              <View style={styles.selectContainer}>
                <Title style={styles.selectLabel}>Lens</Title>
                <SegmentedButtons
                  value={selectedLens}
                  onValueChange={(value) => setSelectedLens(value)}
                  buttons={[
                    { value: "", label: "Select Lens" },
                    ...filteredLenses.map((lens) => ({
                      value: lens.id.toString(),
                      label: lens.model,
                    })),
                  ]}
                  style={styles.segmentedButton}
                />
              </View>
            )}

            {camera && lens && (
              <Card style={styles.resultCard}>
                <Card.Content>
                  <Title style={styles.resultTitle}>Equivalent Focal Lengths</Title>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>Mode</DataTable.Title>
                      <DataTable.Title numeric>Crop</DataTable.Title>
                      {lens.focalRange.min === lens.focalRange.max ? (
                        <DataTable.Title numeric>Focal Length</DataTable.Title>
                      ) : (
                        <>
                          <DataTable.Title numeric>Min Range</DataTable.Title>
                          <DataTable.Title numeric>Max Range</DataTable.Title>
                        </>
                      )}
                    </DataTable.Header>

                    {camera.modes.map((mode, index) => (
                      <DataTable.Row key={index}>
                        <DataTable.Cell>{mode.name}</DataTable.Cell>
                        <DataTable.Cell numeric>
                          {lens.type === "aps-c" ?
                            (lens.cropModes?.fullFrame || 1.5) :
                            mode.cropFactor}x
                        </DataTable.Cell>
                        {lens.focalRange.min === lens.focalRange.max ? (
                          <DataTable.Cell numeric>
                            {calculateEquivalent(lens.focalRange.min, mode, lens)}mm
                          </DataTable.Cell>
                        ) : (
                          <>
                            <DataTable.Cell numeric>
                              {calculateEquivalent(lens.focalRange.min, mode, lens)}mm
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                              {calculateEquivalent(lens.focalRange.max, mode, lens)}mm
                            </DataTable.Cell>
                          </>
                        )}
                      </DataTable.Row>
                    ))}
                  </DataTable>
                </Card.Content>
              </Card>
            )}
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
  selectContainer: {
    marginBottom: 20,
  },
  selectLabel: {
    fontSize: 18,
    marginBottom: 8,
  },
  segmentedButton: {
    width: '100%',
  },
  resultCard: {
    marginTop: 20,
    backgroundColor: '#e3f2fd',
  },
  resultTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  noGearText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
    fontStyle: 'italic',
  },
});
