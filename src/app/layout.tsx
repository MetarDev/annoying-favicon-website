import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = 'Tabky.js';
const description = "A documentation website for Tabky.js library";

export const metadata = {
	title: title,
	description: description,
	metadataBase: new URL('https://tabky.dev'),
	openGraph: {
    title: title,
    description: description,
    url: 'https://tabky.dev',
    siteName: title,
    images: '/featured-image.jpg',
    locale: 'en_US',
    type: 'website',
  },
	twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@MeterDev',
    images: ['featured-image.jpg'],
  },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
