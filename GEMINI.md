# GEMINI.md – Push Notification Implementation

## Execution Plan & Progress

**Phase 1: App Configuration & Setup**
- [x] **Version Control:** Initialize Git repository, create initial commit, and push to GitHub.
- [ ] **Dependency Verification:** Check `package.json` to ensure `react-native-onesignal` is installed and at a compatible version.
- [ ] **OneSignal SDK Initialization (`App.js`):** Review and correct the OneSignal initialization logic, implement the push notification permission prompt, and add logging to confirm device registration.
- [ ] **Expo Configuration (`app.json`):** Verify and correct the `onesignal-expo-plugin` configuration, iOS bundle identifier, App Group, and `aps-environment` entitlement.

**Phase 2: Build & Initial Validation**
- [ ] **EAS Build Configuration (`eas.json`):** Define a development build profile that correctly configures the app for use with OneSignal.
- [ ] **Development Client Build:** Execute an EAS build for iOS and Android to create a development client.
- [ ] **Dashboard Notification Test:** Install the client on a physical device, confirm the device registers with OneSignal, and send a test notification from the OneSignal dashboard to validate the connection.

**Phase 3: In-App Feature Implementation**
- [ ] **Notifications Tab:** Implement the UI for the notifications screen and the logic to fetch and display the last 10 notifications.
- [ ] **Deep Linking:** Add a handler to process incoming notifications and navigate the WebView to a URL if one is provided.

**Phase 4: End-to-End WordPress Integration Testing**
- [ ] **Test Standard Post Notification:** After validating the app receives notifications from the dashboard, create a new standard "Post" in the connected WordPress site to trigger a push notification. Verify it is received and displayed correctly in the app.
- [ ] **Test CPT Notification:** Create a new entry using the existing Custom Post Type in WordPress that is configured to send notifications. Verify this notification is also received and displayed correctly.
- [ ] **Final Verification:** Confirm both notification types appear in the Notifications tab and that deep linking works as expected for both.

---

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