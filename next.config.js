/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/life",
        permanent: true,
      },
      {
        source: "/mentalhealth",
        destination: "/web-development",
        permanent: true,
      },
    ];
  },
};
