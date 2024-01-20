const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // output: 'standalone',
  distDir: "build",
  images: {
    unoptimized: true,
  },
  // env: {
  //   API_URL: process.env.API_URL,
  //   CLOUDFRONT_URL: process.env.CLOUDFRONT_URL,
  //   BOOBETS_URL:process.env.BOOBETS_URL
  // },
};
module.exports = nextConfig;
