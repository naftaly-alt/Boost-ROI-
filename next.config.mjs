/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/LP/:path*", destination: "/managed", permanent: true }];
  },
};

export default nextConfig;
