import './globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Navigation/Footer';

export const metadata = {
  title: 'Librae | Intelligence for Certainty. Infrastructure for Truth.',
  description: 'The definitive layer for global ESG compliance. We transform planetary signals into cryptographically sealed, institutional-grade natural intelligence. Secure DMRV carbon credits and eliminate reputational risk.',
  keywords: 'ESG Compliance, EUDR, Digital MRV, Carbon Credits, Environmental Intelligence, Satellite Data, Copernicus Constellation, Merkle Tree, Supply Chain Traceability, Malaysia, Sovereign Assets',
  authors: [{ name: 'Theenesan VK Kunjaayappan' }],
  creator: 'Librae Environmental Intelligence',
  openGraph: {
    title: 'Librae | The Digital Twin of Earth’s Integrity',
    description: 'Leveraging the Copernicus Constellation and Blockchain for 0% Greenwashing Risk & Premium Carbon Valuation.',
    url: 'https://lenuda.librae.work',
    siteName: 'Librae Portal',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Librae | Sovereign Environmental Intelligence',
    description: 'Transforming planetary signals into institutional-grade natural assets.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
