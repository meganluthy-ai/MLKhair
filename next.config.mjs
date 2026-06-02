/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      // Old Wix URLs mapped to their new homes
      { source: "/services-4", destination: "/hair-loss", permanent: true },
    ];
  },
};

export default nextConfig;
