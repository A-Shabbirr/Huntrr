/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [25, 50, 75, 100],
    },
    async rewrites() {
        return [
            {
                source: '/Guides',
                destination: '/Guides',
            },
        ];
    },
};

export default nextConfig;
