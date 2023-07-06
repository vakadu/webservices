export const Server = {
    endpoint: process.env["NEXT_PUBLIC_APP_ENDPOINT"] as string,
    project: process.env["NEXT_PUBLIC_APP_PROJECT"] as string,
    collectionID: process.env["NEXT_PUBLIC_APP_COLLECTION_ID"] as string,
    databaseID: process.env["NEXT_PUBLIC_APP_DATABASE_ID"] as string,
    firebaseApiKey: process.env["NEXT_PUBLIC_FIREBASE_API_KEY"] as string,
    firebaseAuthDomain: process.env["NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"] as string,
    firebaseProjectId: process.env["NEXT_PUBLIC_FIREBASE_PROJECT_ID"] as string,
    firebaseStorageBucket: process.env["NEXT_PUBLIC_FIREBASE_BUCKET"] as string,
    firebaseMessagingSenderId: process.env["NEXT_PUBLIC_FIREBASE_SENDER_ID"] as string,
    firebaseAppId: process.env["NEXT_PUBLIC_FIREBASE_APP_ID"] as string,
    firebaseMeasurementId: process.env["NEXT_PUBLIC_FIREBASE_MEASUREMENTID"] as string,
};
