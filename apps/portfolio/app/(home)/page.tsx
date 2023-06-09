import { Server } from "@webservices/config";
import { useAppwrite } from "@webservices/services";

export default async function Home() {
	// const { createDocument } = useAppwrite();

	// const result = createDocument(
	// 	Server.databaseID,
	// 	Server.collectionID,
	// 	'test1',
	// 	{
	// 	  'name': 'Vinod',
	// 	}
	//   );
	  
	//   result.then(function (response) {
	// 	 console.log(response);
	//   }, function (error) {
	// 	 console.log(error);
	//   });

	return (
		<div className='flex flex-col justify-center items-center h-screen p-16'>
			<h1 className="text-5xl lg:text-8xl text-center">Under Maintainence</h1>
			<div className="text-2xl lg:text-4xl mt-8 font-jost">
				Will be coming soon.
			</div>
		</div>
	);
}

