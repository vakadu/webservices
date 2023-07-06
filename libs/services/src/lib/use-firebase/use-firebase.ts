import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from 'firebase/analytics';

import { Server } from "@webservices/config";

const firebaseConfig = {
    apiKey: Server.firebaseApiKey,
    authDomain: Server.firebaseAuthDomain,
    projectId: Server.firebaseProjectId,
    storageBucket: Server.firebaseStorageBucket,
    messagingSenderId: Server.firebaseMessagingSenderId,
    appId: Server.firebaseAppId,
	measurementId: Server.firebaseMeasurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
let analytics: any;

if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { db, app, storage, analytics };
