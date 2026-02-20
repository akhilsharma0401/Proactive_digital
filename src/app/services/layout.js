// src/app/Services/layout.js
export const metadata = {
  title: "Our Services | Proactive - Website Development, Redesign & CPaaS Solution",
  description: "Offering  website design, web solutions & CPaaS services to help businesses grow online with strategy, creativity & technology.",
  alternates: {
    canonical: "https://www.proactivedigital.in/services",
  },
  openGraph: {
    title: "Our Services | Proactive - Website Development, Redesign & CPaaS Solution",
    description: "Offering  website design, web solutions & CPaaS services to help businesses grow online with strategy, creativity & technology.",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
