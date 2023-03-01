import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className="mt-8 px-2">
      <Text className="text-red-500">
        Open up App.js to start working on your app!! Right?
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}