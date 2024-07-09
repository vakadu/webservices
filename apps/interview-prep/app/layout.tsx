import localFont from 'next/font/local';

import './assets/css/global.css';

const sathoshi = localFont({
	src: [
		{
			path: './assets/fonts/sathoshi/Satoshi-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './assets/fonts/sathoshi/Satoshi-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './assets/fonts/sathoshi/Satoshi-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './assets/fonts/sathoshi/Satoshi-Bold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './assets/fonts/sathoshi/Satoshi-Black.otf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sathoshi',
});

export const metadata = {
	title: 'Interview Prep',
	description: 'Interview Prep',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${sathoshi.variable} font-sathoshi scroll-smooth`}>
			<body>
				{children}
			</body>
		</html>
	);
}
