const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    i18n,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config;
    },
};

module.exports = nextConfig;
