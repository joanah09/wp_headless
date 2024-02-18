if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
      { // Add this block to whitelist 1.gravatar.com
        protocol: 'http', // or 'https' depending on Gravatar's protocol
        hostname: '1.gravatar.com',
      },
      { // Add this block to whitelist secure.gravatar.com
        protocol: 'https', // Gravatar uses HTTPS
        hostname: 'secure.gravatar.com',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
