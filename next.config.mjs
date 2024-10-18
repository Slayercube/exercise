/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Corrected protocol
          hostname: 'www.course-api.com',
          port: '', // Removed unnecessary space
          pathname: '/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;