"use client";

import { Fragment, useEffect } from "react";

import { Server } from "@webservices/config";
import { useAppwrite } from "@webservices/services";
import Hero from '../../components/home/hero';

const HomePage = () => {

	useEffect(() => {
		document.querySelector('body')?.classList.add('home');
	}, []);
	
	// const { createDocument } = useAppwrite();

	// const result = createDocument(
	// 	Server.databaseID,
	// 	Server.collectionID,
	// 	'test97',
	// 		{
	// 		'name': 'Vinodwww',
	// 		}
	// );
	  
	// result.then(function (response) {
	// 	console.log(response);
	// }, function (error) {
	// 	console.log(error);
	// });

	return (
		<Fragment>
			<Hero/>
		</Fragment>
	);
}

export default HomePage;
