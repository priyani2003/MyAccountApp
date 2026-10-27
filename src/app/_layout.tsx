
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Registration' }}
      />
      <Stack.Screen
        name="review"
        options={{ title: 'Review Details' }}
      />
      <Stack.Screen
        name="success"
        options={{ title: 'Success' }}
      />
    </Stack>
  );
}
