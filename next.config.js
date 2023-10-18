/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.rawg.io',
            },
        ],
    },
    experimental: {
        appDir: true,
    }
}

module.exports = nextConfig
