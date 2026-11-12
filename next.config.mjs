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
  // crossOrigin: "http://192.168.1.15:3567",
  allowedDevOrigins: ['192.168.1.15'],
};

export default nextConfig;
