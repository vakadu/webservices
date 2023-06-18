import { Jost, Roboto } from 'next/font/google'

import './css/global.css';
import './css/vendors/animate.css';
import './css/vendors/splitting.css';
import './css/vendors/swiper.css';

export const metadata = {
	title: 'Vinod Kumar | vakadu',
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

const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-jost',
})
   
const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
	weight: ['300', '400', '500', '700'],
})

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${jost.variable} ${roboto.variable}`}>
			<body className='relative overflow-hidden min-h-[50vh]'>{children}</body>
		</html>
	);
}
