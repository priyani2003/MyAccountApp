
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function RegistrationScreen() {
  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');

  const handleRegister = () => {
    if (
      !userName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword ||
      !yearOfBirth.trim()
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    const birthYear = Number(yearOfBirth);
    const currentYear = new Date().getFullYear();

    if (
      !Number.isInteger(birthYear) ||
      birthYear < 1900 ||
      birthYear > currentYear
    ) {
      Alert.alert('Error', 'Please enter a valid year of birth.');
      return;
    }

    const age = currentYear - birthYear;

    router.push({
      pathname: '/review',
      params: {
        userName: userName.trim(),
        email: email.trim(),
        age: String(age),
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create Account</Text>

      <Text>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Text>Year of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 2000"
        value={yearOfBirth}
        onChangeText={setYearOfBirth}
        keyboardType="number-pad"
        maxLength={4}
      />

      <Button
        title="Review Details"
        onPress={handleRegister}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#2457a7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    padding: 12,
    marginTop: 5,
    marginBottom: 18,
    borderRadius: 8,
  },
});
