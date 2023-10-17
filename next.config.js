/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.rawg.io',
                /*port: '',
                pathname: '/media/games/!**!/!**',*/
            },
        ],
    },
}

module.exports = nextConfig
