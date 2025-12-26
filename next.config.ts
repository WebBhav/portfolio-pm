import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  devServer: {
    allowedDevOrigins: [
      "https://*.cluster-w5vd22whf5gmav2vgkomwtc4go.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
