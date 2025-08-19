import { useEffect } from "react";
import { Alert, Text, View } from "react-native";
import OneSignal from "react-native-onesignal";

export default function App() {
  useEffect(() => {
    // ✅ Initialize OneSignal with your App ID
    OneSignal.setAppId("11e5a570-a0d5-4d7f-a115-cfcd42153864");

    // ✅ iOS: prompt user for push permissions
    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      console.log("🔔 Push permission response:", response);
      Alert.alert("Push Permission", response ? "Allowed ✅" : "Denied ❌");
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🚀 OneSignal Push Test</Text>
    </View>
  );
}
