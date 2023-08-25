"use client";

import { Fragment, useEffect } from "react";
import dynamic from 'next/dynamic';

import Hero from '../../components/home/hero';

const Services = dynamic(() => import('../../components/home/services'), {
	loading: () => <p>Loading...</p>,
});

const Skills = dynamic(() => import('../../components/home/skills'), {
	loading: () => <p>Loading...</p>,
});

const Resume = dynamic(() => import('../../components/home/resume'), {
	loading: () => <p>Loading...</p>,
});

const Contact = dynamic(() => import('../../components/home/contact'), {
	loading: () => <p>Loading...</p>,
});

const HomePage = () => {

	useEffect(() => {
		document.querySelector('body')?.classList.add('home');
	}, []);

	return (
		<Fragment>
			<Hero/>
			<Services/>
			{/* <Skills/> */}
			<Resume/>
			<Contact/>
		</Fragment>
	);
}

export default HomePage;
