import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Success() {
  const { userName } = useLocalSearchParams<{
    userName: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✅</Text>
      <Text style={styles.heading}>
        Registration Successful!
      </Text>
      <Text style={styles.message}>
        Welcome, {userName}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  message: {
    fontSize: 20,
  },
});
