/** @type {import('next').NextConfig} */
import withFonts from 'next-fonts';

export default withFonts({
  reactStrictMode: true,
  webpack(config) {
    // You can customize the Webpack config if needed
    return config;
  },
});
