import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1M2ebVi96l7Qi9dLy6oz8qqij8NWy8Tpw/view?usp=drivesdk',
        permanent: true,
      },
    ]
  },
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
