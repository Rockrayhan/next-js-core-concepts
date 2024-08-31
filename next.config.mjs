/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**',
          },
        ],
      },


      // redirect to a path
      
          redirects:  async () => {
        return [
          {
            source: '/service',
            destination: '/',
            permanent: true,
          },
        ]
      },


};

export default nextConfig;
