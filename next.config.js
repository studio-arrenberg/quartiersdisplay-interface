/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = {
  swcMinify: true, // error when enabled! Rust compiler enabled (faster)
  reactStrictMode: false, // highlighting potential problems in an application
  images: { // allow external resources for images
    domains: ["https://www.arrenberg.app", "arrenberg.de", "arrenberg.app", "localhost", "localhost:3000"],
  },
  webpack(config) { // webpack config
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
