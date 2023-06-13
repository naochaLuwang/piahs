/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/naocha/**",
      },
      {
        protocol: "https",
        hostname: "www.wallpaperuse.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
