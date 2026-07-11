/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/about", destination: "/#meet-tricia", permanent: true },
      { source: "/tricia", destination: "/#meet-tricia", permanent: true },
      { source: "/services", destination: "/#offer", permanent: true },
    ];
  },
};

export default nextConfig;
