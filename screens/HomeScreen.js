import { Text, SafeAreaView } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-500">Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
