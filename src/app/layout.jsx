import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import CursorEffect from "./components/curserpointer/CursorEffect.jsx";
import GlobalToaster from "./components/Toaster/GlobalToaster";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTopButton from "./components/BackToTopButton";

export const metadata = {
  title: "Proactive Digital | Smarter Digital Solutions",
  description: "From creative websites to smart marketing - our web design, development, and digital marketing services help brands grow online with impact.",
  alternates: {
    canonical: "",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*  fontfamily  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* scroll JS cdn  */}
        {/* <script src="https://unpkg.com/scrollreveal"></script> */}
      </head>
      <body>
        <ScrollProgressBar />
        <GlobalToaster />
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
        <CursorEffect />
      </body>
    </html>
  );
}
