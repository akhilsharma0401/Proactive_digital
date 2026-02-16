import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: process.env.BACKEND_PROTOCOL, 
        hostname: process.env.BACKEND_DOMAIN, 
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
