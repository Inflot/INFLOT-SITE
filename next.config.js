const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  basePath: '',
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  }
});
