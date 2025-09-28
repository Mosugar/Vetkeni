import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

export const metadata = {
  title: "VetKeni - Clinique Vétérinaire Dr. Chakroune | Kénitra",
  description: "Clinique Vétérinaire Dr. Chakroune à Kénitra. Soins d'excellence pour vos animaux de compagnie. Urgences vétérinaires 24/7. Appelez: 0537378587 ou 0661171954",
  keywords: [
    "vétérinaire Kénitra",
    "Dr. Chakroune", 
    "clinique vétérinaire",
    "urgences vétérinaires",
    "soins animaux Kénitra",
    "vétérinaire Maroc",
    "consultation vétérinaire",
    "vaccinations animaux"
  ],
  authors: [{ name: "Dr. Chakroune" }],
  creator: "VetKeni - Dr. Chakroune",
  publisher: "Clinique Vétérinaire Kénitra",
  openGraph: {
    title: "VetKeni - Clinique Vétérinaire Dr. Chakroune | Kénitra",
    description: "Soins vétérinaires d'excellence à Kénitra. Dr. Chakroune, vétérinaire professionnelle. Urgences 24/7: 0537378587",
    url: "https://vetkeni.com", // Update with actual domain
    siteName: "VetKeni - Clinique Vétérinaire",
    images: [
      {
        url: "https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg",
        width: 1200,
        height: 630,
        alt: "VetKeni - Clinique Vétérinaire Dr. Chakroune Kénitra",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetKeni - Clinique Vétérinaire Dr. Chakroune",
    description: "Soins vétérinaires d'excellence à Kénitra. Urgences 24/7: 0537378587",
    images: ["https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vetkeni.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg" />
        
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        
        {/* Local Business Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Clinique Vétérinaire Dr. Chakroune",
              "image": "https://res.cloudinary.com/dylpck2et/image/upload/v1759074219/412692551_323726270580332_8767776756854516255_n_ef7zws.jpg",
              "description": "Clinique vétérinaire moderne à Kénitra offrant des soins d'excellence pour vos animaux",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kénitra",
                "addressCountry": "MA"
              },
              "telephone": ["0537378587", "0661171954"],
              "url": "https://vetkeni.com",
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 09:00-14:00"
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card",
              "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7020524389977!2d-6.818014!3d34.000186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b0034609767%3A0xd56dc3a639f44caf!2sClinique%20V%C3%A9t%C3%A9rinaire%20Dr%20Chakroune%20-%20Urgences%20V%C3%A9t%C3%A9rinaire%20Rabat!5e0!3m2!1sen!2sma!4v1759073966898!5m2!1sen!2sma"
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}