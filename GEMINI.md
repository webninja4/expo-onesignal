# GEMINI.md – Push Notification Implementation

## Project Overview
This project is an Expo React Native app (using Bolt prototypes) that loads a WordPress site via WebView. At the bottom are tabs: Home, Agenda, Schedule, and Notifications. Currently, the app runs in a dev client but **push notifications are not functional**.  

The WordPress site uses the **OneSignal plugin**, which is correctly configured with our OneSignal account. The app has `App.js` configured to initialize OneSignal, but iOS push prompts are not appearing, and the app does not register in Settings → Notifications.  

The objective of this phase is to **implement and fully test push notifications** on both iOS and Android.

---

## Objectives / Goals

1. **Integrate OneSignal push notifications in the app:**
   - Confirm app registers correctly with OneSignal.
   - Ensure the OneSignal Notification Service Extension is included (iOS).
   - Prompt the user for push notification permissions on first launch.

2. **Enable sending push notifications from WordPress:**
   - New posts automatically trigger a push notification to app users.
   - Optionally send custom push notifications via a CPT + ACF fields.

3. **Notifications tab in app:**
   - Display the last 10 notifications sent.
   - Support deep linking if the notification contains a URL.

4. **Development and testing setup:**
   - Ensure EAS dev builds correctly include push capabilities.
   - Test push notifications without requiring App Store/TestFlight submission using a development client.
   - Add logging to confirm device registration.

---

## Requirements

- **Expo / React Native:** current Bolt prototype setup.
- **iOS:**
  - Correct `aps-environment` entitlements in `app.json`.
  - App group configured for OneSignal: `group.com.projectainc.myapptest.onesignal`.
  - Notification Service Extension included.
- **Android:** correct OneSignal initialization.
- **WordPress / OneSignal Plugin:** REST API keys configured.

---

## Edge Cases

1. Notifications are **global only** (no per-user targeting needed yet).  
2. Notifications **expire after 30 days**.  
3. Notifications **always show in Notifications tab**, even if expired.  
4. Support **deep linking** from notifications to specific pages in WebView.

---

## Suggested Next Tasks for Gemini CLI

1. Verify and correct `App.js` OneSignal initialization.
2. Confirm `app.json` entitlements and OneSignal plugin config.
3. Create scripts or prompts to test push registration in dev client.
4. Implement the Notifications tab UI for last 10 messages.
5. Add optional CPT + ACF support for custom WordPress push notifications.
6. Provide steps to rebuild EAS dev client with OneSignal capabilities.
7. Implement logging or debug helpers to confirm push registration.
