import { Client, Databases, Account } from "appwrite";

import { Server } from "@webservices/config";

export function useAppwrite() {
	const appwrite = new Client();
	
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

	const createDocument = (databaseId: string, collectionId: string, documentId: string, data: any) => {		
		return database.createDocument(
			databaseId,
			collectionId,
			documentId,
			data
		);
	};

	return {
		createDocument
	}
}

export default useAppwrite;
