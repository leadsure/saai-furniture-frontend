/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faisal-saai-furniture.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.saifurnitureart.com/",
      },
    ],
  },
};

export default nextConfig;
