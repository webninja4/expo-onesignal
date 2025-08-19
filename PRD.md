# Push Notification Feature – PRD

## Purpose
Enable push notifications for the app using OneSignal so that users can receive updates when new content is posted on the WordPress site, and view notifications in-app.

---

## User Stories

1. **As a user**, I want to receive push notifications on my device when new content is available.
2. **As a user**, I want to see my recent notifications in a dedicated Notifications tab.
3. **As a user**, I want notifications to support deep links to relevant pages in the app.
4. **As a developer**, I want to test notifications in development builds without submitting to the App Store or Google Play.

---

## Functional Requirements

1. OneSignal SDK initialized in `App.js`.
2. Push permission prompt appears on first launch (iOS and Android).
3. Notification Service Extension included for iOS.
4. Notifications tab displays the last 10 messages sent.
5. Notifications expire after 30 days and also stay visibile in the app for 30 days.
6. WordPress integration sends notifications automatically when new posts are created.
7. Support deep linking from notification to WebView pages.

---

## Non-Functional Requirements

1. Must work on **iOS development clients** and **Android development builds**.
2. Device registration confirmed and logged.
3. EAS builds must include OneSignal plugin correctly.
4. Notifications performance must not block app launch or scrolling.

---

## Edge Cases

- Notifications are **global only** for now.
- Users may deny push permissions.
- Deep link URLs may be missing or invalid.
- Notifications older than 30 days should expire but still appear in the app.

---

## Acceptance Criteria

- [ ] App prompts for push permissions on first launch.
- [ ] Device is registered with OneSignal.
- [ ] Test notification sent from WordPress or OneSignal dashboard is received.
- [ ] Notifications tab shows last 10 messages.
- [ ] Tapping a notification opens correct page in WebView if URL is present.
- [ ] Notifications older than 30 days do not show.
