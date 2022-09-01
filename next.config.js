/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = {
  swcMinify: true, // error when enabled! Rust compiler enabled (faster)
  reactStrictMode: true, // highlighting potential problems in an application
  images: { // allow external resources for images
    domains: ["https://www.arrenberg.app", "arrenberg.de", "arrenberg.app"],
  },
  webpack(config) { // webpack config
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
