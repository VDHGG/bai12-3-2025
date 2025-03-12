import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Home Screen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello 👋</Text>
      <Text style={styles.subtitle}>Christie Doe</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.insightBox} onPress={() => navigation.navigate('Scan')}>
          <Ionicons name="scan" size={32} color="#8A7EF0" />
          <Text style={styles.insightTitle}>Scan new</Text>
          <Text style={styles.insightSub}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="warning" size={32} color="#F08A7E" />
          <Text style={styles.insightTitle}>Counterfeits</Text>
          <Text style={styles.insightSub}>Counterfeited 32</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Scan Screen Component
function ScanScreen() {
  return (
    <View style={styles.scanContainer}>
      <Image source={{ uri: 'https://i.imgur.com/3fO5tY0.png' }} style={styles.scanImage} />
      <View style={styles.scanLabel}>
        <Text style={styles.scanText}>Lauren's</Text>
        <Text style={styles.scanTextBold}>Orange Juice</Text>
      </View>
    </View>
  );
}

// Stack Navigator
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Bottom Tabs Navigator
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      )}} />
      <Tab.Screen name="Scan" component={ScanScreen} options={{ tabBarIcon: ({ color, size }) => (
        <Ionicons name="scan" size={size} color={color} />
      )}} />
    </Tab.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#555' },
  insightsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  insightBox: { alignItems: 'center', padding: 20, backgroundColor: '#F5F5F5', borderRadius: 10 },
  insightTitle: { fontSize: 16, fontWeight: 'bold' },
  insightSub: { fontSize: 12, color: '#777' },
  scanContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA' },
  scanImage: { width: 200, height: 400, borderRadius: 10 },
  scanLabel: { position: 'absolute', bottom: 50, backgroundColor: '#fff', padding: 10, borderRadius: 10 },
  scanText: { fontSize: 14, color: '#777' },
  scanTextBold: { fontSize: 16, fontWeight: 'bold' },
});
