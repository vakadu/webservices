import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

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
	title: 'Vinod Kumar | Interview Prep',
	description: 'Vinod Kumar',
	icons: {
		icon: [
			{ url: '/favicons/favicon.ico' },
			{ url: '/favicons/favicon-16x16.png' },
			{ url: '/favicons/favicon-32x32.png' },
		],
		shortcut: ['/favicons/favicon-16x16.png'],
		apple: [
			{ url: '/favicons/apple-touch-icon.png' },
		]
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	generator: 'Next.js',
	applicationName: 'Portfolio Vinod',
	referrer: 'origin-when-cross-origin',
	keywords: ['vinod', 'vinod kumar', 'vakadu', 'vakadu vinod', 'vinod vakadu', 'portfolio', 'javascript', 'react', 'nextjs'],
	authors: [{ name: 'Vinod Kumar', url: 'https://vakaduvinod.in' }],
	colorScheme: 'light',
	creator: 'Vinod Kumar',
	publisher: 'Vinod Kumar',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: 'Vinod Kumar | Vakadu',
		description: 'Vinod Kumar',
		url: 'https://vakaduvinod.in',
		siteName: 'Vinod Kumar',
		images: [
			{
				url: '/favicons/android-chrome-512x512.png',
				width: 512,
				height: 512,
			}
		],
		locale: 'en_US',
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${sathoshi.variable} font-sathoshi scroll-smooth`}>
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

			</head>

			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
