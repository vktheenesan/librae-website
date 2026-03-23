import './globals.css';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Navigation/Footer';

export const metadata = {
  title: 'Librae | Intelligence for Peace. Infrastructure for Truth.',
  description: 'Librae Environmental Intelligence leverages the Copernicus Constellation and Blockchain to secure the future of Small Farmers and Global Estates. EUDR Ready.',
  keywords: 'EUDR, ESG, environmental intelligence, satellite data, carbon credits, LENUDA, Malaysia, Thailand',
  openGraph: {
    title: 'Librae | The Digital Twin of Earth\'s Integrity',
    description: 'Leveraging Copernicus Constellation and Blockchain for environmental sovereignty.',
    type: 'website',
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
