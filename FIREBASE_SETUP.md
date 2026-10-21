# Firebase setup for SchoolPlanSDEV

## 1. Create a Firebase project
1. Open https://console.firebase.google.com/ and create a project.
2. Add a Web App and copy its Firebase configuration into `firebase-config.js`.
3. In **Build → Authentication → Sign-in method**, enable **Email/Password**.
4. In **Build → Firestore Database**, create a database.
5. In **Authentication → Users**, create your admin user and copy its UID.

## 2. Restrict admin access
Replace `YOUR_ADMIN_AUTH_UID` with the real admin user's UID in BOTH:
- `firebase-config.js` (adminUids)
- `firestore.rules` (isAdmin allowlist)

Publish `firestore.rules` in Firebase Console → Firestore Database → Rules. Never leave the placeholder rule deployed. The rules—not the admin page—enforce write access.

## 3. Publish
Commit/push this repository to GitHub Pages. The admin page is at `/admin/`. Firebase config contains public web-app identifiers, not server credentials. Never put service-account private keys in frontend code.

## 4. Data
The admin page creates documents in the Firestore `lessons` collection with fields:
- `day`: 0 Monday through 4 Friday
- `period`: 0–5 for the six lesson slots
- `subject`, `teacher`, `room`: strings

The main page reads this collection live. When no lesson documents exist or Firebase is not configured, the original demo timetable remains visible. This is a static frontend integration; user accounts, grades, absences, and other private records need their own authenticated data model and rules.
