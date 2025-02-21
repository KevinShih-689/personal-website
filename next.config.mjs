import path from 'path';
import { fileURLToPath } from 'url';
import withPlaiceholder from '@plaiceholder/next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'src/app'),
            path.join(__dirname, 'src/stories')
        ],
    },
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            }
        );
        fileLoaderRule.exclude = /\.svg$/i;
        return config;
    },
    images: {
        localPatterns: [
            {
                pathname: '/public/icons/**',
                search: ''
            },
            {
                pathname: '/src/stories/assets/**',
                search: ''
            }
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
};

export default withPlaiceholder(nextConfig);
