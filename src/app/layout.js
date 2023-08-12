import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "HackOdisha 3.0",
  description:
    "Largest Student hackathon of Odisha | HackOdisha 3.0 - a thrilling 36-hour online hackathon organized by Webwiz, Nit Rourkela— an event dedicated to fostering community collaboration.",
  image: "https://hackodisha.tech/Images/HO3.svg",
  url: "https://hackodisha.tech/",
  keywords: [
    "HackOdisha",
    "HackOdisha 3.0",
    "HackOdisha 2023",
    "HackOdisha 3.0 2023",
    "Hack Odisha",
    "Hackathon",
    "NIT Rourkela",
    "student run hackathon",
    "hackathon in odisha",
    "hackathon in india",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Website",
  name: "HackOdisha 3.0",
  image: "https://hackodisha.tech/Images/HO3.svg",
  description:
    "Largest Student hackathon of Odisha | HackOdisha 3.0 - a thrilling 36-hour online hackathon organized by Webwiz, Nit Rourkela— an event dedicated to fostering community collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MLP0HVXXM9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MLP0HVXXM9', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <link
          rel="icon"
          href="/Images/HO3.svg"
          type="image/x-icon"
          sizes="any"
        ></link>
        <meta property="og:title" content="HackOdisha 3.0" />
        <meta property="og:url" content="https://hackodisha.tech/" />
        <meta
          property="og:image"
          content="https://aksharpharmacy.com/Images/HO3.svg"
        />
        <meta name="twitter:title" content="Akshar Pharmacy" />
        <meta
          name="twitter:description"
          content="HackOdisha 3.0 | Largest Student Run Hackathon of HackOdisha | Participate and Win Prizes, Goodies and subscriptions."
        />
        <meta
          name="twitter:image"
          content="https://aksharpharmacy.com/Images/HO3.svg"
        />
        <meta
          name="twitter:card"
          content="https://aksharpharmacy.com/Images/HO3.svg"
        />
      </head>
      <body className="font-syoog bggrad">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
