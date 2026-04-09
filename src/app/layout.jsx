import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import CursorEffect from "./components/curserpointer/CursorEffect.jsx";
// import GlobalToaster from "./components/Toaster/GlobalToaster";
// import ScrollProgressBar from "./components/ScrollProgressBar";
// import BackToTopButton from "./components/BackToTopButton";
import ClientProviders from "./ClientProviders";
import Script from "next/script";

export const metadata = {
  title: "Custom Web Design & Development Services | Proactive",
  description:
    "Proactive offers custom website design and development services, including responsive web design, scalable web applications and UI/UX design solutions.",
  alternates: {
    canonical: "https://www.proactivedigital.in/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "Custom Web Design & Development Services | Proactive",
    description:
      "Proactive offers custom website design and development services, including responsive web design, scalable web applications and UI/UX design solutions.",
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
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
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

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({
                    'gtm.start': new Date().getTime(),
                    event:'gtm.js'
                  });
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'? '&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WMJX7NW8');
              `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google tag (gtag.js) --> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LMFQX09GG7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-LMFQX09GG7');
          `}
        </Script>

        {/* META PIXEL TAGS */}

        <Script id="fb-pixel" strategy="afterInteractive">
          {`
           !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '902119379291874');
            fbq('track', 'PageView');
          `}
        </Script>

       
      </head>
      <body className="font-sans">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMJX7NW8"
            height="0"
            width="0"
          ></iframe>
        </noscript>

        {/* META PIXEL (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=902119379291874&ev=PageView&noscript=1"
          />
        </noscript>

        

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
