/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/previews/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" },
          { key: "Content-Security-Policy", value: "form-action 'none'" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/previews/:slug", destination: "/previews/:slug/index.html" },
      { source: "/table/app", destination: "https://the-table-commercial.vercel.app/table/app" },
      { source: "/table/app/:path*", destination: "https://the-table-commercial.vercel.app/table/app/:path*" },
    ];
  },
  async redirects() {
    return [
      { source: "/about", destination: "/tricia", permanent: true },
      { source: "/services", destination: "/tricia#offer", permanent: true },
      { source: "/shop", destination: "/studio", permanent: true },
    ];
  },
};

export default nextConfig;

