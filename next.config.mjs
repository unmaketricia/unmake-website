/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/tricia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
