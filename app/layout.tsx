import '../public/css/Global.css';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  authors: { name: 'fh.prv', url: 'mailto:info@fhprv.de' },
  description: 'The official website of fh.prv.',
  creator: 'fh.prv',
  icons: {
    icon: '/img/favicon.ico',
  },
  publisher: 'fh.prv',
  title: 'fh.prv - Homepage',
  viewport: 'width=device-width, initial-scale=0.1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<body className={sourceCodePro.className}>
			<Header/>
			{children}
			<Footer/>
		</body>
    </html>
  );
}
