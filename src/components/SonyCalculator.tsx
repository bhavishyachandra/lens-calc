import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Card, Title, Text, Surface, DataTable, SegmentedButtons } from "react-native-paper";
import { sonyCameras, sonyLenses } from "../data/sonyData";

export default function SonyCalculator() {
  const [selectedCamera, setSelectedCamera] = useState("");
  const [selectedLens, setSelectedLens] = useState("");

  const camera = sonyCameras.find((cam) => cam.id === parseInt(selectedCamera));
  const lens = sonyLenses.find((lens) => lens.id === parseInt(selectedLens));

  const calculateEquivalent = (focalLength: number, cropFactor: number) => {
    return Math.round(focalLength * cropFactor);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Surface style={styles.container} elevation={2}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Sony Lens Calculator</Title>

            <View style={styles.selectContainer}>
              <Title style={styles.selectLabel}>Camera</Title>
              <SegmentedButtons
                value={selectedCamera}
                onValueChange={(value) => setSelectedCamera(value)}
                buttons={[
                  { value: "", label: "Select Camera" },
                  ...sonyCameras.map((camera) => ({
                    value: camera.id.toString(),
                    label: camera.model,
                  })),
                ]}
                style={styles.segmentedButton}
              />
            </View>

            <View style={styles.selectContainer}>
              <Title style={styles.selectLabel}>Lens</Title>
              <SegmentedButtons
                value={selectedLens}
                onValueChange={(value) => setSelectedLens(value)}
                buttons={[
                  { value: "", label: "Select Lens" },
                  ...sonyLenses.map((lens) => ({
                    value: lens.id.toString(),
                    label: lens.model,
                  })),
                ]}
                style={styles.segmentedButton}
              />
            </View>

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
                        <DataTable.Cell numeric>{mode.cropFactor}x</DataTable.Cell>
                        {lens.focalRange.min === lens.focalRange.max ? (
                          <DataTable.Cell numeric>
                            {calculateEquivalent(lens.focalRange.min, mode.cropFactor)}mm
                          </DataTable.Cell>
                        ) : (
                          <>
                            <DataTable.Cell numeric>
                              {calculateEquivalent(lens.focalRange.min, mode.cropFactor)}mm
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                              {calculateEquivalent(lens.focalRange.max, mode.cropFactor)}mm
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
});
