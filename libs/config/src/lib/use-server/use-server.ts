export const Server = {
    endpoint: process.env.NX_APP_ENDPOINT as string,
    project: process.env.NX_APP_PROJECT as string,
    collectionID: process.env.NX_APP_COLLECTION_ID as string,
    databaseID: process.env.NX_APP_DATABASE_ID as string,
};
