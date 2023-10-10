/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["cdn.imagin.studio", "media.graphassets.com"]
    },
}

module.exports = nextConfig