import { Jost, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import './assets/css/global.css';
import './assets/css/vendors/animate.css';
import './assets/css/vendors/splitting.css';
import './assets/css/vendors/swiper.css';

const sans = localFont({
	src: [
		{
			path: './assets/fonts/sans/GeneralSans-ExtraLight.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: './assets/fonts/sans/GeneralSans-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './assets/fonts/sans/GeneralSans-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './assets/fonts/sans/GeneralSans-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './assets/fonts/sans/GeneralSans-Semibold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './assets/fonts/sans/GeneralSans-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
})

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
		<html lang="en" className={`${jost.variable} ${roboto.variable} ${sans.className}`}>
			<body>
				{children}
			</body>
		</html>
	);
}
