import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import OneSignal from 'react-native-onesignal';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    // ✅ Initialize OneSignal with your App ID
    OneSignal.setAppId("11e5a570-a0d5-4d7f-a115-cfcd42153864");

    // ✅ Add a listener for subscription changes
    OneSignal.User.pushSubscription.addEventListener('change', (subscription) => {
      console.log("🔔 Push subscription changed:");
      if (subscription.current.id) {
        console.log("  - Player ID:", subscription.current.id);
        Alert.alert("OneSignal Registration", `Player ID: ${subscription.current.id}`);
      }
      console.log("  - Token:", subscription.current.token);
      console.log("  - Opted In:", subscription.current.optedIn);
    });

    // ✅ iOS: prompt user for push permissions
    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      console.log("🔔 Push permission response:", response);
    });

    // ✅ Handle notifications received while app is in foreground
    OneSignal.setNotificationWillShowInForegroundHandler((event) => {
      const notification = event.getNotification();
      console.log("📩 Notification received in foreground:", notification);
      event.complete(notification); // show notification
    });

    // ✅ Handle user tapping on a notification
    OneSignal.setNotificationOpenedHandler((event) => {
      console.log("📬 Notification opened:", event);
      Alert.alert("Notification Opened", JSON.stringify(event, null, 2));
    });

    // ✅ Clean up listeners on unmount
    return () => {
      OneSignal.clearHandlers();
    };
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}