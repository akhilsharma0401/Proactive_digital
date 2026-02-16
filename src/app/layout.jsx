import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import CursorEffect from "./components/curserpointer/CursorEffect.jsx";
// import GlobalToaster from "./components/Toaster/GlobalToaster";
// import ScrollProgressBar from "./components/ScrollProgressBar";
// import BackToTopButton from "./components/BackToTopButton";
import ClientProviders from "./ClientProviders";

export const metadata = {
  title: "Custom Web Design & Development Services | Proactive",
  description: "Proactive offers custom website design and development services, including responsive web design, scalable web applications and UI/UX design solutions.",
  alternates: {
    canonical: "",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "Custom Web Design & Development Services | Proactive",
    description: "Proactive offers custom website design and development services, including responsive web design, scalable web applications and UI/UX design solutions.",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Only what you use
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-opensans",
});
export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`} >
      <head>
        {/*  fontfamily  */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
        {/* scroll JS cdn  */}
        {/* <script src="https://unpkg.com/scrollreveal"></script> */}
      </head>
      <body className="font-sans">
        <ClientProviders />
        {/* <ScrollProgressBar /> */}
        {/* <GlobalToaster /> */}
        <Header />
        {children}
        {/* <BackToTopButton /> */}
        <Footer />
        {/* <CursorEffect /> */}
      </body>
    </html>
  );
}
