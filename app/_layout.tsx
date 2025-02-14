import { Tabs } from "expo-router";
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2196F3',
    secondary: '#1976D2',
  },
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: "Calculator",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="calculate" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="gear"
            options={{
              title: "My Gear",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="camera" size={24} color={color} />
              ),
            }}
          />
        </Tabs>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
