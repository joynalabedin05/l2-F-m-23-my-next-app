/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['soshace.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
      },
};

// export default nextConfig;
module.exports = nextConfig;
