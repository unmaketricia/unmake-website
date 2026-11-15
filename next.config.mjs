/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/about", destination: "/tricia", permanent: true },
      { source: "/services", destination: "/tricia#offer", permanent: true },
      { source: "/shop", destination: "/studio", permanent: true },
    ];
  },
};

export default nextConfig;

