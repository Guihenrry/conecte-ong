/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ksceifrpcrkcxbhfoaiu.supabase.co',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}

export default nextConfig
