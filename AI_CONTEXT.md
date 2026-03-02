# UniStudy Italia - AI Context Document

This document is designed to give AI assistants (Claude, Gemini, ChatGPT, Cursor, Windsurf) a deep understanding of the **AuleStudioApp (UniStudy Italia)** codebase to provide the best possible code suggestions, refactors, and architectural advice.

## 1. What is this app?
**UniStudy Italia** is the definitive app for Italian university students looking for study rooms. 
Key features:
- **Multi-University Support:** Supports over 100 institutions across Italy (Campania, Lazio, Piemonte, Puglia, Molise, Marche, AFAM).
- **Smart Filters:** Filter by Region, University Pole, City, or Specific Building.
- **Room Details:** Real-time open/closed status, estimated crowding, services (WiFi, AC, Outlets, Disabled Access).
- **Advanced Navigation:** Distance calculations and routing (Walk, Transit, Car) integrating with Native Maps.
- **SmartWeather:** Contextual weather alerts (e.g., "Bring an umbrella", "Good for outdoor study").
- **Dynamic Theming:** The UI theme adapts to the official colors of the user's selected university.
- **Bluetooth Chat / Student Radar:** Allows finding students nearby and chatting using BLE (`react-native-ble-plx`).

## 2. Technical Stack
- **Framework:** Expo SDK 54+ (React Native 0.81.5), React 19.
- **Language:** TypeScript (Strict).
- **Navigation:** React Navigation v7 (Stack).
- **Mapping:** `react-native-maps`, `react-native-map-clustering`, `expo-location`.
- **Styling:** Vanilla React Native `StyleSheet` + Reanimated for micro-interactions.
- **Storage:** `@react-native-async-storage/async-storage`.

## 3. Codebase Architecture

The `src/` directory is the core of the app:
- `/src/components/`:
  - Contains reusable UI elements (`SmartWeatherCard.tsx`, `StudyRoomCard.tsx`, `/Filters`, `/Map`, `/RoomList`, `/UI`).
  - **Rule:** They should be highly optimized, ideally wrapped in `React.memo` if they depend on complex props, to ensure list scrolling remains at 60fps.
- `/src/screens/`:
  - `HomeScreen.tsx`, `StudyRoomsScreen.tsx`, `RoomDetailScreen.tsx`, `SettingsScreen.tsx`, `BluetoothChatScreen.tsx`, etc.
  - **Rule:** Screens act as controllers. They bind to the Navigation Stack, read from `StorageService`, and pass props to Components.
- `/src/data/`:
  - Contains hardcoded JSONs or TypeScript arrays containing the list of Universities and study rooms. This drives the "Multi-University" feature without a backend.
- `/src/services/`:
  - Interfaces with externalities, e.g., `storageService.ts` for AsyncStorage logic.
- `/src/utils/`:
  - Helpers for math, geolocation (Haversine formula for distance), and time checks (e.g., checking if an hour strictly falls within the room's opening hours).

## 4. Specific AI Developer Guidelines

### 4.1. Dealing with Geolocation and Maps
When modifying map code:
- Ensure `expo-location` permissions are checked (`Location.requestForegroundPermissionsAsync`).
- Always gracefully fallback if the user denies location permissions (do not crash; sort alphabetically instead of by distance).
- Use `react-native-map-clustering` if large quantities of pins are rendered to avoid severe lag.

### 4.2. Dealing with Theme & University Colors
Because the app implements a *Dynamic Theme* based on the selected institution:
- Do not hardcode accent colors (like `#FF0000`).
- Use the overarching theme provider/hook to extract `primary`, `secondary`, and `background` colors.
- Ensure dark mode (`useColorScheme`) combined with the University palette yields accessible contrast ratios.

### 4.3. Dealing with Bluetooth / Student Radar
- This uses `react-native-ble-plx`. 
- Always ensure the required Android 12+ permissions (`BLUETOOTH_SCAN`, `BLUETOOTH_CONNECT`, `ACCESS_FINE_LOCATION`) are declared and requested at runtime.
- Remember BLE operations must be handled asynchronously and safely cleaned up on unmount or blur.

### 4.4. State & Re-renders
- The app uses standard React Hooks.
- For complex, rapidly changing state (like scrolling or dragging a bottom sheet), use `react-native-reanimated` (`useSharedValue`, `useAnimatedStyle`) to keep computation on the UI thread and avoid bridge bottlenecks.

### 4.5. Committing / Proposing Changes
1. Think step-by-step.
2. Outline the files you are altering.
3. Validate React hooks dependency arrays.
4. Ensure you don't break TypeScript typings in `src/types/`.
5. Output code tailored for **Expo Managed Workflow**, unless native adjustments (`app.json`, `app.config.js`) are explictly required.

### 4.6. STRICT CONSTRAINT: ZERO-CLOUD POLICY & 0€ BUDGET
- **CRITICAL:** This application operates strictly offline-first and peer-to-peer. 
- **NEVER** suggest, import, or implement external backends, SaaS, AWS, Firebase, Supabase, or any paid API.
- All data persistence MUST rely on `AsyncStorage` or local `SQLite`.
- All networking MUST rely on physical device capabilities (Bluetooth BLE, WiFi Direct) or local processing.
- If a feature seems to require a server, engineer a local, device-driven, or crowd-sourced alternative.

---
*Created by the unified AI assistant for optimal development velocity.*
