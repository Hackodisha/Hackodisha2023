import Navbar from "@/components/Navbar/Navbar";
import "./globals.css"

export const metadata = {
  title: "HackOdisha 3.0",
  description: "Largest Student hackathon of Odisha | 3rd Edition | 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-syoog bggrad">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
