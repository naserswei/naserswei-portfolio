/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "", // optional, leave empty if no specific port is required
        pathname: "/**", // allow any paths on the domain
      },
    ],
  },
};

export default nextConfig;
