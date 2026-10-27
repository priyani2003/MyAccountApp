
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  useRouter,
  useLocalSearchParams,
} from 'expo-router';

export default function Review() {
  const router = useRouter();

  const { userName, email, age } = useLocalSearchParams<{
    userName: string;
    email: string;
    age: string;
  }>();

  const userAge = Number(age);

  const handleConfirm = () => {
    if (!Number.isFinite(userAge) || userAge < 18) {
      Alert.alert(
        'Age Restriction',
        'You must be 18 years old or older to proceed.'
      );
      return;
    }

    router.push({
      pathname: '/success',
      params: {
        userName: userName ?? '',
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Review Your Details
      </Text>

      <Text style={styles.detail}>
        Name: {userName}
      </Text>

      <Text style={styles.detail}>
        Email: {email}
      </Text>

      <Text style={styles.detail}>
        Age: {age}
      </Text>

      {userAge < 18 && (
        <Text style={styles.warning}>
          You must be at least 18 to proceed.
        </Text>
      )}

      <View style={styles.button}>
        <Button
          title="Confirm Registration"
          onPress={handleConfirm}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go Back and Edit"
          onPress={() => router.back()}
          color="#64748B"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F5F7FB',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 28,
    color: '#1D3557',
  },
  detail: {
    fontSize: 18,
    marginBottom: 16,
  },
  warning: {
    color: '#DC2626',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  button: {
    marginTop: 14,
  },
});
