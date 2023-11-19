/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "vercel.com",
      },
    ],
  },
  transpilePackages: [
    "swagger-ui-react",
    "swagger-client",
    "react-syntax-highlighter",
  ],
};
